from backend.utils.dto import dto_quiz
from flask import Blueprint, jsonify, request
from models.quiz import Quiz

quiz_bp = Blueprint('quiz_bp', __name__)

@quiz_bp.route('/<modulo>', methods=['GET'])
def get_quiz_by_modulo(modulo):
    # try:
        quiz = Quiz.get_quiz_by_modulo(modulo)

        if not quiz:
            print('❌ Módulo não encontrado')
            return jsonify({'error': 'Módulo não encontrado'}), 404

        print(f'✅ Quiz encontrado: {quiz.id}')

        quiz.id = str(quiz.id)

        print(quiz)
        print(dto_quiz(quiz))
        # quiz_dict = Quiz.to_mongo().to_dict()
        # quiz_dict['_id'] = str(quiz.id)
        return dto_quiz(quiz)
    
    # except Exception as err: 
    #     print(f'❌ Erro ao buscar quiz: {err}') 
    #     return jsonify({ 'error': str(err) }), 500
