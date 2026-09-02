from backend.utils.teste_quiz import teste_quiz
from flask import Blueprint, jsonify, request
from models.quiz import Quiz

quiz_bp = Blueprint('quiz_bp', __name__)

@quiz_bp.route('/<modulo>', methods=['GET'])
def get_quiz_by_modulo(modulo):
    # try:
        teste_quiz()

        quiz = Quiz.get_quiz_by_modulo(modulo)
        print(quiz)
        if not quiz:
            print('❌ Módulo não encontrado')
            return jsonify({'error': 'Módulo não encontrado'}), 404

        print(f'✅ Quiz encontrado: {quiz.id}')

        quiz_dict = quiz.to_mongo().to_dict()
        quiz_dict['_id'] = str(quiz.id)
        return jsonify(quiz_dict)
    
    # except Exception as err: 
    #     print(f'❌ Erro ao buscar quiz: {err}') 
    #     return jsonify({ 'error': str(err) }), 500
