from src.etl import ETL
import itertools
import fire


class Main:

    YEARS = [2020, 2019, 2018, 2017, 2016, 2015]
    MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    SOURCES = ['cpgf', 'cpcc', 'despesas-execucao', 'licitacoes', 'compras', 'viagens']

    def extract(self, source: str = 'all'):
        """
        Extract 2015-2020 files from a specified source.

        :param source: (str, default 'all') When all, extract files from all sources.
        Possible values: cpgf, cpcc, despesas-execucao, licitacoes, compras, viagens (a)
        """
        sources = [source] if source != 'all' else self.SOURCES

        for source in sources:
            if source != 'viagens':
                series = itertools.product(self.YEARS, self.MONTHS)
            else:
                series = itertools.product(self.YEARS, [''])

            for year, month in series:
                print(f'Downloading {source} {year}{month}...')
                ETL.extract(source, year, month)


if __name__ == '__main__':
    fire.Fire(Main)
