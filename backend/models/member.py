from mongoengine import *
import bcrypt
from utils.crypto import decrypt

class Member(Document):
    first_name = StringField()
    last_name = StringField()
    email = StringField(unique=True)
    password = StringField()

    # Criar Perfil
    @staticmethod
    def validate_create(member_dict):
        member_dict['password'] = Member.hash_string(member_dict['password'])
        return member_dict
    
    @staticmethod
    def hash_string(string): # Criptografia dos dados
        return (bcrypt.hashpw(string.encode('utf-8'), bcrypt.gensalt())).decode('utf-8')
    
    # Login
    @staticmethod
    def verify_email(email):
        for member in Member.objects():
            if decrypt(member.email) == email:
                return True
        return False

    @staticmethod
    def verify_email_password(email, pwd):
        for member in Member.objects():
            if decrypt(member.email) == email:
                if bcrypt.checkpw(pwd.encode('utf-8'), member.password.encode('utf-8')):
                    return True
        return False
    
    # Infos gerais
    @staticmethod
    def get_all_members():
        return Member.objects()
    
    @staticmethod
    def get_member_by_id(id):
        return Member.objects(id=id).exclude('password').first()
    
    @staticmethod
    def get_member_by_email(email):
        for member in Member.objects():
            if decrypt(member.email) == email:
                return member.exclude('password')
        return None