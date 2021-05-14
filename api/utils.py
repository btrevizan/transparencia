from decimal import Decimal
from src.psql import PSQL
import os


def query(cmd):
    db = PSQL('localhost', 'transparencia', 'python', 'python')
    result = db.query(cmd)
    return result


def get_query(name):
    filepath = os.path.join('sql', 'queries', f'{name}.sql')

    with open(filepath, 'r') as file:
        lines = file.readlines()

    lines = [l.replace('\n', '').replace('\t', '') for l in lines if not l.startswith('--')]
    sql = ' '.join(lines)

    return sql


def get_result(query_name):
    sql = get_query(query_name)
    result = query(sql)

    axis = ['x', 'y', 'z']

    processed = []
    for r in result:
        new_r = {}
        for i, value in enumerate(r):
            new_r[axis[i]] = float(value) if type(value) is Decimal else value

        processed.append(new_r)

    return {'result': processed}
