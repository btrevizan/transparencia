-- Gasto total agrupado por ano
SELECT ano_transacao, SUM(total) as total
FROM gastos.totais
WHERE ano_transacao > 2013
GROUP BY ano_transacao
ORDER BY ano_transacao
