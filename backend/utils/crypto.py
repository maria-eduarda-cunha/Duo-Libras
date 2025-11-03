from cryptography.fernet import Fernet
import config

cipher_suite = Fernet(config.fernet_key)

def encrypt(string):
    return cipher_suite.encrypt(string.encode())

def decrypt(string):
    return cipher_suite.decrypt(string).decode()
