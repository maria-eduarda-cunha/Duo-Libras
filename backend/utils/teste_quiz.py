from pymongo import MongoClient
import config


def teste_quiz():
    print("db_mongo:", config.db_mongo)
    print("col_mongo:", config.col_mongo)
    
    client = MongoClient(config.db_mongo)

    db = client[config.col_mongo]
    quiz = db['quiz']
    quizbkp = db['quiz_backup']
    member = db['member']

    print('Quiz, mongo: ',quiz)

    dados = quizbkp.find()
    print("Resultado QBKP: ", dados)
    quantidade = quizbkp.count_documents({})
    print("Quantidade de documentos:", quantidade)
        

    dados = member.find()
    print("Resultado Member: ", dados)
    quantidade = member.count_documents({})
    print("Quantidade de documentos:", quantidade)
    
    dados = quiz.find()
    print("Resultado Q: ", dados)
    quantidade = quiz.count_documents({})
    print("Quantidade de documentos:", quantidade)
        

    print("Banco:", db.name)
    print("Coleção:", quiz.name)

    quantidade = quiz.count_documents({})
    print("Quantidade de documentos:", quantidade)

    for item in dados:
        print('Item: ',item)

    print('fim')