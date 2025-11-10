from flask import Blueprint, jsonify, request
from models.quiz import Quiz

quiz_bp = Blueprint('quiz_bp', __name__)

@quiz_bp.route('/<modulo>', methods=['GET'])
def get_quiz_by_modulo(modulo):
    quiz = Quiz.objects(modulo=modulo).first()
    print(quiz['id'])
    if not quiz:
        print('❌ Módulo não encontrado')
        return jsonify({'error': 'Módulo não encontrado'}), 404

    quiz_dict = quiz.to_mongo().to_dict()
    quiz_dict['_id'] = str(quiz.id)
    return jsonify(quiz_dict)
