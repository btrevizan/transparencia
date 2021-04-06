from .psql import PSQL
from glob import glob


class Database:

    def __init__(self, host: str, database: str, username: str, password: str):
        self.conn = PSQL(host, database, username, password)

    def normalize(self):
        """Execute SQL commands saved in "sql" folder."""
        filepaths = sorted(glob('sql/*.sql'))

        self.conn.create_schema('gastos')

        for filepath in filepaths:

            with open(filepath, 'r') as file:
                sql = ''.join(file.readlines()).replace('\n', '').replace('\t', '')

            tbl_name = filepath.split('/')[-1][2:-4]
            print(f'Creating and populating table gastos.{tbl_name}...', end=' ')
            self.conn.manipulate(sql)
            print('Done')
