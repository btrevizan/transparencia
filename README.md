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
anos de 2015 e 2020. Nosso projeto irá processar as seguintes fontes:
- **cpgf**: cartões de pagamento do Governo Federal
- **cpcc**: cartões de pagamento do Governo Federal - Compras Centralizadas
- **despesas-execucao**: despesas públicas
- **licitacoes**: gastos com licitações
- **compras**: gastos com contratos
- **viagens**: viagens a serviço

Para extrair os arquivos, basta executar:
```{shell}
$ pyhton main.py extract <source>
```
Por exemplo:
```{shell}
$ pyhton main.py extract "despesas-execucao"
```
Ou não passar esse parâmetro para extrair os arquivos de todas as fontes.
