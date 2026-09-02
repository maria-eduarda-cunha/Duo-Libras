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

        quiz['_id'] = str(quiz['_id'])
        
        print(quiz)
        print(jsonify(quiz))
        # quiz_dict = Quiz.to_mongo().to_dict()
        # quiz_dict['_id'] = str(quiz.id)
        return jsonify(quiz)
    
    # except Exception as err: 
    #     print(f'❌ Erro ao buscar quiz: {err}') 
    #     return jsonify({ 'error': str(err) }), 500
