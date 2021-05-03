-- Gasto total agrupado por ano e orgao responsavel
SELECT ano_transacao, SUM(total) AS total, orgao_responsavel
FROM gastos.totais
GROUP BY ano_transacao, orgao_responsavel
ORDER BY ano_transacao, orgao_responsavel
