from src.database import Database
from src.etl import ETL
import itertools
import fire


class Main:

    YEARS = [2020, 2019, 2018, 2017, 2016, 2015, 2014]
    MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    SOURCES = ['cpgf', 'despesas-execucao', 'licitacoes', 'viagens']

    def extract(self, source: str = 'all', replace: bool = False):
        """
        Extract 2015-2020 files from a specified source.

        :param source: (str, default 'all') When all, extract files from all sources.
        Possible values: cpgf, cpcc, despesas-execucao, licitacoes, compras, viagens (a)
        :param replace: (bool, default False) Whether to replace the existing files.
        """
        sources = [source] if source != 'all' else self.SOURCES

        for source in sources:
            if source != 'viagens':
                series = itertools.product(self.YEARS, self.MONTHS)
            else:
                series = itertools.product(self.YEARS, [''])

            for year, month in series:
                ETL.extract(source, year, month, replace)

    def transform(self, source: str = 'all'):
        """
        Unzip the downloaded files and append data into a single file.
        The resulting files are located in data/processed.

        :param source: (str, default 'all') When all, extract files from all sources.
        Possible values: cpgf, cpcc, despesas-execucao, licitacoes, compras, viagens (a)
        """
        sources = [source] if source != 'all' else self.SOURCES

        for source in sources:
            ETL.transform(source)

    def load(self, host, database, username, password, source: str = 'all'):
        """
        Load the processed files into the database.

        :param host: (str) DB address.
        :param database: (str) Database name.
        :param username: (str) User with create/drop/insert table/schema privileges.
        :param password: (str) User's password.
        :param source: (str, default 'all') When all, extract files from all sources.
        Possible values: cpgf, cpcc, despesas-execucao, licitacoes, compras, viagens (a)
        """
        # host = localhost
        # database = transparencia
        # username = python
        # password = python
        sources = [source] if source != 'all' else self.SOURCES

        for source in sources:
            ETL.load(source, host, database, username, password)

    def normalize(self, host, database, username, password):
        """
        Execute SQL commands saved in "sql" folder for denormalization.

        :param host: (str) DB address.
        :param database: (str) Database name.
        :param username: (str) User with create/drop/insert table/schema privileges.
        :param password: (str) User's password.
        """
        Database(host, database, username, password).normalize()


if __name__ == '__main__':
    fire.Fire(Main)
