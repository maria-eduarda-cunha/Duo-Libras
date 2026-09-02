from pymongo import MongoClient
import config

client = MongoClient(config.db_mongo)

db = client[config.col_mongo]
quiz = db['quiz']

print('Quiz, mongo: ',quiz)

dados = quiz.find()
print("Resultado: ", dados)

for item in dados:
    print(item)