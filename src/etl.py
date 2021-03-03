from tqdm import tqdm
import requests
import os


class ETL:

    @staticmethod
    def extract(source, year, month):
        url = f'http://www.portaltransparencia.gov.br/download-de-dados/{source}/{year}{month}'
        print(url)

        response = requests.get(url, stream=True)

        if response.status_code != requests.codes.ok:
            print('Bad request.')
            return

        datapath = f'data/raw/{source}'
        os.makedirs(datapath, exist_ok=True)

        with open(f'{datapath}/{year}{month}.zip', "wb") as handle:
            for data in tqdm(response.iter_content(), desc=f'{datapath}/{year}{month}.zip'):
                handle.write(data)
