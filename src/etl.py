from unidecode import unidecode
from time import sleep
from tqdm import tqdm
from glob import glob
import requests
import sys
import os

if sys.version_info >= (3, 7):
    import zipfile
else:
    import zipfile37 as zipfile


class ETL:

    @classmethod
    def extract(cls, source: str, year: int, month: str, replace: bool = False):
        datapath = f'data/raw/{source}'
        datafile = f'{datapath}/{year}{month}.zip'

        if not replace and os.path.isfile(datafile):
            return

        url = f'http://www.portaltransparencia.gov.br/download-de-dados/{source}/{year}{month}'
        print(url)

        try:
            response = requests.get(url, stream=True)
        except requests.exceptions.ConnectionError:
            print('Connection error. Retrying...')
            sleep(61)

            cls.extract(source, year, month)
            return

        if response.status_code != requests.codes.ok:
            print('File does not exist. Thank you, next!')
            return

        os.makedirs(datapath, exist_ok=True)

        total = int(response.headers.get('Content-Length', 0))

        with open(datafile, "wb") as handle:
            for data in tqdm(response.iter_content(),
                             desc=datafile,
                             total=total,
                             unit_scale=True,
                             unit_divisor=1024,
                             unit='B',
                             miniters=1,
                             leave=False):
                handle.write(data)

    @classmethod
    def transform(cls, source: str):
        datapath = f'data/processed/{source}'
        dest_file = f'{datapath}/{source}.csv'

        os.makedirs(datapath, exist_ok=True)

        include_header = True
        files = sorted(glob(f'data/raw/{source}/*.zip'))

        for filename in files:

            with zipfile.ZipFile(filename, 'r') as zip:
                unzipped_filename = zip.namelist()

                print(f'Extracting all the files from {filename} to {unzipped_filename}...', end=' ')
                zip.extractall()
                print('Done.')

            if source in ['cpcc', 'cpgf', 'despesas-execucao']:  # unzip cria apenas um arquivo

                unzipped_filename = unzipped_filename[0]
                cls.append(unzipped_filename, dest_file, include_header)

            elif source == 'compras':
                # compras: unzip cria uma pasta com 4 arquivos.
                # Porém, apenas 2 nos interessam: <data>_Compras.csv e <data>_ItemCompra.csv

                for source_file in unzipped_filename:
                    name = unidecode(source_file.split('_')[-1].replace('╞o', 'ão'))
                    dest_file = os.path.join('data/processed', source, name)

                    if name in ['Compras.csv', 'ItemCompra.csv']:
                        cls.append(source_file, dest_file, include_header)

            elif source == 'licitacoes':
                # licitacoes: unzip cria uma pasta com 3 arquivos. Todos necessários.

                for source_file in unzipped_filename:
                    name = unidecode(source_file.split('_')[-1].replace('╞o', 'ão'))
                    dest_file = os.path.join('data/processed', source, name)
                    cls.append(source_file, dest_file, include_header)

            elif source == 'viagens':
                # viagens: unzip cria uma pasta com 4 arquivos. Apenas _Trecho.csv não será usado

                for source_file in unzipped_filename:
                    name = unidecode(source_file.split('_')[-1].replace('╞o', 'ão'))
                    dest_file = os.path.join('data/processed', source, name)

                    if name != 'Trecho.csv':
                        cls.append(source_file, dest_file, include_header)

            os.system(f'rm *.csv')
            include_header = False

    @staticmethod
    def append(source, dest, header):
        with open(source, encoding='ISO-8859-1') as file:
            data = file.readlines()

        if header:
            mode = 'w'
            data[0] = unidecode(data[0].replace(' ', '_')).lower()
        else:
            data = data[1:]
            mode = 'a'

        with open(dest, mode) as file:
            file.writelines(data)
