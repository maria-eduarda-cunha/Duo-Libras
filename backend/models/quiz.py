from mongoengine import *

class Quiz(Document):
    modulo = StringField(required=True, unique=True)

    pergunta1 = StringField()
    respostas1 = DictField()
    gif1 = StringField()

    pergunta2 = StringField()
    respostas2 = DictField()
    gif2 = StringField()

    pergunta3 = StringField()
    respostas3 = DictField()
    gif3 = StringField()
    