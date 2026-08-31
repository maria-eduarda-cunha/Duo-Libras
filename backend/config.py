import os
import streamlit as st

def get_secret(key):
    try:
        return st.secrets[key]
    except Exception:
        return os.getenv(key)

# DB INFO
db_mongo = get_secret("DB_MONGO")
col_mongo = get_secret("COL_MONGO")

# CRYPTO
fernet_key = get_secret('FERNET_KEY')

# USER ADM
root_email = get_secret("ROOT_EMAIL")
root_password = get_secret("ROOT_PASSWORD")
root_name = get_secret("ROOT_NAME")
root_last_name = get_secret("ROOT_LAST_NAME")
