from mongoengine import *
import bcrypt
from utils.crypto import decrypt
from datetime import datetime
from zoneinfo import ZoneInfo

class Member(Document):
    first_name = StringField()
    last_name = StringField()
    email = StringField(unique=True)
    password = StringField()
    level = IntField(default=0)
    score = IntField(default=0)
    streak = IntField(default=0)
    last_access_date = StringField(default=lambda: datetime.now(ZoneInfo("America/Sao_Paulo")).strftime("%Y-%m-%d"))

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

    @staticmethod
    def get_score_by_email(email):
        for member in Member.objects():
            if decrypt(member.email) == email:
                return member['score']
                
    @staticmethod
    def update_score_by_email(email, score):
        for member in Member.objects():
            if decrypt(member.email) == email:
                member['score'] = score
                member.save()
                return

    @staticmethod
    def get_streak_by_email(email):
        for member in Member.objects():
            if decrypt(member.email) == email:
                return (member['last_access_date'], member['streak'])
                
    @staticmethod
    def update_streak_by_email(email, last_access_date, streak):
        for member in Member.objects():
            if decrypt(member.email) == email:
                member['last_access_date'] = last_access_date
                member['streak'] = streak
                member.save()
                return

    @staticmethod
    def get_level_by_email(email):
        for member in Member.objects():
            if decrypt(member.email) == email:
                return member['level']
                
    @staticmethod
    def update_level_by_email(email, level):
        for member in Member.objects():
            if decrypt(member.email) == email:
                member['level'] = level
                member.save()
                return