from time import sleep
from tqdm import tqdm
import requests
import os


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
