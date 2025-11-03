from flask import Blueprint, request, Response
from models.member import Member
from utils.crypto import encrypt, decrypt

member_bp = Blueprint('member_bp', __name__)

# Criar conta
@member_bp.route('/signin', methods=['POST'])
def create_member():
    try:
        dados = request.json
        if(Member.verify_email(dados['email'])):
            return {"msg": "Email já cadastrado"}, 302
        else:
            member = Member.validate_create(dados)
            member = Member(email=encrypt(member['email']),
            first_name=encrypt(member['name'].split()[0]),
            last_name=encrypt(member['name'].split()[1]),
            password=member['password'])
            member.save()
            return {"msg": "Usuário criado com sucesso!"}, 200
    except Exception as err:
        raise

# Verifica login
@member_bp.route('/login/auth', methods=['POST'])
def login_member():
    try:
        dados = request.json
        if(Member.verify_email_password(dados['email'],dados['password'])):
            return {"msg": "Login correto"}, 200
        else:
            return {"msg": "Login ou senha incorretos"}, 400
    except Exception as err:
        raise

@member_bp.route('/<id>', methods=['GET'])
def get_member_by_id(id):
    try:
        member = Member.get_member_by_id(id)
        return {
            "id":  str(member['id']),
            "email": decrypt(member['email']),
            "nome":  decrypt(member['first_name']),
            "sobrenome":  decrypt(member['last_name'])
        }, 200
    except Exception as err:
        raise
