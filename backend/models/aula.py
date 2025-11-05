from mongoengine import *

class Aula(Document):
    aula = IntField(required=True)
    modulo = StringField(required=True)
    pergunta1 = StringField(required=True)
    respostas1 = DictField(required=True)
    gif = StringField(required=True)
