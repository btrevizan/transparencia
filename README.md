# transparência amada, Brasil
Projeto de Banco de Dados (UFRGS)

ETL e análise dos dados do [Portal da Transparência do Governo Federal](http://www.portaltransparencia.gov.br).

## Requisitos
Algumas bibliotecas em Python são utilizadas nesse projeto. 
Para poder executar os scripts, você também precisa instalá-las, como segue:
```{shell}
$ pip install -r requirements.txt
```

# Extract, Load e Transform (ETL)

## Extract
Primeiro passo é extrair os dados do portal da transparência. 
Esse método irá extrair todos os arquivos do portal, dada um fonte, entre os
anos de 2015 e 2020 e salvará em `data/raw/<fonte>/`. Nosso projeto irá processar as seguintes fontes:
- **cpgf**: cartões de pagamento do Governo Federal
- **cpcc**: cartões de pagamento do Governo Federal - Compras Centralizadas
- **despesas-execucao**: despesas públicas
- **licitacoes**: gastos com licitações
- **compras**: gastos com contratos
- **viagens**: viagens a serviço

Para extrair os arquivos, basta executar:
```{shell}
$ pyhton -u main.py extract <source>
```
Por exemplo:
```{shell}
$ pyhton -u main.py extract "despesas-execucao"
```
Ou não passar esse parâmetro para extrair os arquivos de todas as fontes.

## Transform
O processo de load descompacta os arquivos extraídos do portal, limpa o cabeçalho e une 
todos os registros em um único arquivo localizado em `data/processed/<fonte>/`. 
Esse processo irá criar ~23GB de dados. 

Para tanto, basta executar:
```{shell}
$ pyhton -u main.py transform <source>
```
Por exemplo:
```{shell}
$ pyhton -u main.py transform "despesas-execucao"
```
Ou não passar esse parâmetro para transformar os arquivos de todas as fontes.

## Load
Esse processo insere os dados dos arquivos criados na etapa *transform* no banco de dados.
Todos os campos são interpretados como texto para que possam ser processados futuramente.

### Dependências
O processo de *load* possui algumas dependências, são elas:
- Banco de dados PostgreSQL instalado ou acessível remotamente
- Base de dados já criada
- Um usuário com privilégio de criar/excluir tabelas e schemas e inserir dados nas tabelas

Para rodar o *load*, basta executar:
```{shell}
$ pyhton -u main.py load <host> <database> <username> <password> <source>
```
Onde, `host` é o endereço do banco de dados. 
Se ele estiver localizado localmente, então `host = localhost`.
Os demais campos são autodescritivos.

Esse processo insere **~78 milhões** de linhas no banco de dados.
