from flask import Blueprint, jsonify, request
from models.quiz import Quiz  # seu modelo no MongoDB

quiz_bp = Blueprint('quiz_bp', __name__)

@quiz_bp.route('/quiz/<modulo>', methods=['GET'])
def get_quiz_by_modulo(modulo):
    print(modulo)
    quiz = Quiz.objects(modulo=modulo).first()
    print(quiz)
    if not quiz:
        print('erro')
        return jsonify({'error': 'Módulo não encontrado'}), 404
    return jsonify(quiz)
