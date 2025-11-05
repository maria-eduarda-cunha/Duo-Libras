from flask import Blueprint, request, jsonify
import traceback
from models.member import Member
from utils.crypto import encrypt, decrypt

member_bp = Blueprint('member_bp', __name__)

# Criar conta
@member_bp.route('/signin', methods=['POST'])
def create_member():
    try:
        dados = request.json
        
        if Member.verify_email(dados['email']):
            return jsonify({"success": False, "msg": "Email já cadastrado"}), 409  # CONFLICT
        
        member = Member.validate_create(dados)

        novo_member = Member(
            email=encrypt(member['email']),
            first_name=encrypt(member['name'].split()[0]),
            last_name=encrypt(member['name'].split()[1]),
            password=member['password']
        )
        novo_member.save()

        return jsonify({"success": True, "msg": "Usuário criado com sucesso!"}), 201

    except Exception as err:
        print("❌ ERRO NO BACKEND:")
        traceback.print_exc()
        return jsonify({"success": False, "error": str(err)}), 500


# Login
@member_bp.route('/login/auth', methods=['POST'])
def login_member():
    try:
        dados = request.json

        if Member.verify_email_password(dados['email'], dados['password']):
            return jsonify({"success": True, "msg": "Login correto"}), 200
        
        return jsonify({"success": False, "msg": "Login ou senha incorretos"}), 401

    except Exception as err:
        print("❌ ERRO NO BACKEND:")
        traceback.print_exc()
        return jsonify({"success": False, "error": str(err)}), 500


# Buscar por ID
@member_bp.route('/<id>', methods=['GET'])
def get_member_by_id(id):
    try:
        member = Member.get_member_by_id(id)
        
        return jsonify({
            "id": str(member['id']),
            "email": decrypt(member['email']),
            "nome": decrypt(member['first_name']),
            "sobrenome": decrypt(member['last_name'])
        }), 200
    
    except Exception as err:
        print("❌ ERRO NO BACKEND:")
        traceback.print_exc()
        return jsonify({"success": False, "error": str(err)}), 500
