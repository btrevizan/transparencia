from tqdm import tqdm
import requests
import os


class ETL:

    @staticmethod
    def extract(source, year, month):
        datapath = f'data/raw/{source}'
        datafile = f'{datapath}/{year}{month}.zip'

        if os.path.isfile(datafile):
            return

        url = f'http://www.portaltransparencia.gov.br/download-de-dados/{source}/{year}{month}'
        print(url)

        response = requests.get(url, stream=True)

        if response.status_code != requests.codes.ok:
            print('Bad request.')
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
