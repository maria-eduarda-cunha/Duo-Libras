# app/__init__.py

from flask import Flask
from mongoengine import connect
import config
from utils.crypto import encrypt, decrypt

def create_app():
    app = Flask(__name__)

    # Conexão MongoDB Atlas
    try:
        connect(
            host=config.db_mongo,
            db=config.col_member,
            alias="default",
            tls=True
        )
        print("✅ MongoDB conectado com sucesso")
    except Exception as e:
        print(f"❌ ERRO MongoDB: {e}")

    from models import Member

    # Cria usuário root se não existir
    create_root_user()

    # Registrar controllers
    from controllers.member import member_bp
    app.register_blueprint(member_bp, url_prefix="/member")

    return app


def create_root_user():
    from models.member import Member

    members = Member.objects()
    for m in members:
        if decrypt(m.email) == config.root_email:
            return

    try:
        root = Member(
            email=encrypt(config.root_email),
            password=Member.hash_string(config.root_password),
            first_name=encrypt(config.root_name),
            last_name=encrypt(config.root_last_name),
        )
        root.save()
        print("✅ Usuário root criado")
    except Exception:
        print("❌ Falha ao criar usuário root")
