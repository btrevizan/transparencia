from .utils import get_result
from flask import Flask
import json

app = Flask(__name__)


@app.route('/')
def index():
    return {'message': 'API is working.'}


@app.route('/query1')
def query1():
    result = get_result('query1')
    return json.dumps(result)


@app.route('/query2')
def query2():
    result = get_result('query2')
    return json.dumps(result)


@app.route('/query3')
def query3():
    result = get_result('query3')
    return json.dumps(result)


@app.route('/query4')
def query4():
    result = get_result('query4')
    return json.dumps(result)


@app.route('/query5')
def query5():
    result = get_result('query5')
    return json.dumps(result)


@app.route('/query6')
def query6():
    result = get_result('query6')
    return json.dumps(result)


@app.route('/query7')
def query7():
    result = get_result('query7')
    return json.dumps(result)


@app.route('/query8')
def query8():
    result = get_result('query8')
    return json.dumps(result)


@app.route('/query9')
def query9():
    result = get_result('query9')
    return json.dumps(result)


@app.route('/query10')
def query10():
    result = get_result('query10')
    return json.dumps(result)


@app.route('/query11')
def query11():
    result = get_result('query11')
    return json.dumps(result)


@app.route('/query12')
def query12():
    result = get_result('query12')
    return json.dumps(result)


@app.route('/query13')
def query13():
    result = get_result('query13')
    return json.dumps(result)


@app.route('/query14')
def query14():
    result = get_result('query14')
    return json.dumps(result)


@app.route('/query15')
def query15():
    result = get_result('query15')
    return json.dumps(result)


@app.route('/query16')
def query16():
    result = get_result('query16')
    return json.dumps(result)


@app.route('/query17')
def query17():
    result = get_result('query17')
    return json.dumps(result)


@app.route('/query18')
def query18():
    result = get_result('query18')
    return json.dumps(result)


@app.route('/query19')
def query19():
    result = get_result('query19')
    return json.dumps(result)


@app.route('/query20')
def query20():
    result = get_result('query20')
    return json.dumps(result)
