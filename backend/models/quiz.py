from mongoengine import *

class Quiz(Document):
    modulo = StringField(required=True, unique=True)
    quiz = ListField()

    @staticmethod
    def get_quiz_by_modulo(modulo):
        return Quiz.objects(modulo=modulo).first()
    