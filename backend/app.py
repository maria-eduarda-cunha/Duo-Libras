import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from mongoengine import connect
import config
import models  # importa os modelos
from utils.crypto import encrypt, decrypt

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


# Conectar ao MongoDB Atlas
try:
    connect(
        host=config.db_mongo,
        db=config.col_mongo,
        alias="default",
        tls=True
    )
    print("✅ MongoDB conectado com sucesso")
except Exception as e:
    print(f"❌ ERRO ao conectar no MongoDB: {e}")


# Criar root user se não existir
def create_root_user():
    from models.member import Member

    members = Member.objects()
    for m in members:
        if decrypt(m.email) == config.root_email:
            print("🔑 Root já existe")
            return

    try:
        root = Member(
            email=encrypt(config.root_email),
            password=Member.hash_string(config.root_password),
            first_name=encrypt(config.root_name),
            last_name=encrypt(config.root_last_name),
        )
        root.save()
        print("✅ Usuário root criado com sucesso")
    except Exception as err:
        print(f"❌ Erro ao criar root: {err}")


create_root_user()


# Importar blueprints depois da conexão
from controllers.member import member_bp
from controllers.quiz import quiz_bp

app.register_blueprint(member_bp, url_prefix="/member")
app.register_blueprint(quiz_bp, url_prefix="/quiz")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
