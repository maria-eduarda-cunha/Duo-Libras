def dto_quiz(quiz):
    return {
        '_id': str(quiz.id),
        'modulo': quiz.modulo,
        'quiz': quiz.quiz
        # [
        #     {
        #         'pergunta': questao.get('pergunta'),
        #         'respostas': questao.get('respostas', {}),
        #         'gif': questao.get('gif')
        #     }
        #     for questao in quiz.quiz
        # ]
    }