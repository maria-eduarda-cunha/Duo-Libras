from mongoengine import *

class Aula(Document):
    modulo = StringField(required=True)
    
    pergunta1 = StringField(required=True)
    respostas1 = DictField(required=True)
    gif1 = StringField(required=True)

    pergunta2 = StringField()
    respostas2 = DictField()
    gif2 = StringField()

    pergunta3 = StringField()
    respostas3 = DictField()
    gif3 = StringField()
    
    meta = {'collection': 'quiz'}
