def dto_quiz(quiz):
    return {
        '_id': str(quiz.id),
        'modulo': quiz.modulo,
        'quiz': quiz.quiz
        'level': quiz.level
    }