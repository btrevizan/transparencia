-- Total de despesas agrupado por ano
SELECT SUM (valor_transacao::float) AS total, ano_transacao
FROM despesaorcamentaria
GROUP BY ano_transacao
ORDER BY ano_transacao ASC;
