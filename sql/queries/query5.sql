-- Total de despesas agrupado por ano
SELECT ano_transacao, SUM(valor_transacao::float) AS total
FROM gastos.despesaorcamentaria
GROUP BY ano_transacao
ORDER BY ano_transacao ASC;
