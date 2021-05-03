from src.psql import PSQL
from flask import Flask
app = Flask(__name__)


@app.route('/')
def index():
    return {'message': 'API is working.'}


@app.route('/query/<cmd>')
def query(cmd):
    db = PSQL('localhost', 'transparencia', 'python', 'python')
    result = db.query(cmd)
    return {'result': result}
