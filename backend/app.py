from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import models
import threading # caso a gente utilize processamentos paralelos

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*":{"origins":"*"}}) # DESCOMENTAR QUANDO RODAR FORA DO CODESPACE

# models.__init__(app) # descomentar depois de arrumar o __init__.py

from controllers.member import member_bp

app.register_blueprint(member_bp, url_prefix='/member')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)