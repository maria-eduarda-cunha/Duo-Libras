from mongoengine import connect
from models.member import Member
import config
from utils.crypto import encrypt, decrypt

def init_app(app):

    try:
        conn = connect(
            db=config.col_member,
            host=config.db_mongo,
            alias="default"
        )
    except Exception as e:
        print(e)

    populate_db()

def populate_db():
    if checkRoot() == False:
        try:
            root = Member(email=encrypt(config.root_email), 
                            password=Member.hash_string(config.root_password), 
                            first_name=encrypt(config.root_name), 
                            last_name=encrypt(config.root_last_name), enabled=True)
            root.save()
            if checkRoot() == False: raise("Failed to create root user")
        except Exception as err:
            raise("Failed to create root user")

def checkRoot():
    members = Member.objects()
    flag = False
    for member in members:
        if decrypt(member.email) == config.root_email:
            flag = True
    return flag
