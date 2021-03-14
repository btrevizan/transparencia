import psycopg2


class PSQL:

    def __init__(self, host: str, database: str, username: str, password: str):
        self._conn = psycopg2.connect(host=host, database=database, user=username, password=password)

    def manipulate(self, sql: str):
        """Execute a SQL command to manipulate data (INSERT, DELETE, DROP, CREATE...).

        :param sql: (str) Command to execute.
        """
        cursor = self._conn.cursor()
        cursor.execute(sql)
        cursor.close()
        self._conn.commit()

    def query(self, sql: str):
        """Execute a SQL command to query data (SELECT).

        :param sql: (str) Command to execute.
        :return (list) Query result.
        """
        cursor = self._conn.cursor()
        cursor.execute(sql)
        result = cursor.fetchall()
        return result

    def create_schema(self, name: str):
        """Create a new schema if not exists.

        :param name: (str) Schema's name.
        """
        self.manipulate(f'CREATE SCHEMA IF NOT EXISTS {name}')

    def drop_table(self, name: str):
        """Drop table if exists.

        :param name: (str) Table's name.
        """
        self.manipulate(f'DROP TABLE IF EXISTS {name}')

    def create_table(self, name: str, cols: dict):
        """Create table if not exists.

        :param name: (str) Table's name.
        :param cols: (dict) Columns: {<name>: <data type (str)>}
        """
        cols = [f'{colname} {dtype}' for colname, dtype in cols.items()]
        cols = ','.join(cols)

        self.manipulate(f'CREATE TABLE IF NOT EXISTS {name} ({cols})')

    def insert(self, table: str, cols: list, values: list):
        """Create table if not exists.

        :param table: (str) Table's name.
        :param cols: (list) Columns' names.
        :param values: (list) List of stringed tuples.
        """
        cols = ','.join(cols)
        values = ','.join(values)

        self.manipulate(f'INSERT INTO {table} ({cols}) VALUES {values}')

    def __del__(self):
        self._conn.close()
