from pymongo import MongoClient
import config


def teste_quiz():
    print("db_mongo:", config.db_mongo)
    print("col_mongo:", config.col_mongo)
    
    client = MongoClient(config.db_mongo)

    db = client[config.col_mongo]
    quiz = db['quiz']

    print('Quiz, mongo: ',quiz)

    dados = quiz.find()
    print("Resultado: ", dados)

    print("Banco:", db.name)
    print("Coleção:", quiz.name)

    quantidade = quiz.count_documents({})
    print("Quantidade de documentos:", quantidade)

    for item in dados:
        print('Item: ',item)

    print('fim')