import os

# DB INFO
db_mongo = os.getenv('DB_MONGO')
col_member = os.getenv('COL_MEMBER')

#CRYPTO
fernet_key = os.getenv('FERNET_KEY')

#USER ADM
root_email = os.getenv('ROOT_EMAIL')
root_password = os.getenv('ROOT_PASSWORD')
root_name = os.getenv('ROOT_NAME')
root_last_name = os.getenv('ROOT_LAST_NAME')