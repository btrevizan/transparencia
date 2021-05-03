-- Gasto total agrupado por ano
SELECT ano_transacao, SUM(total) as total
FROM gastos.totais
GROUP BY ano_transacao
ORDER BY ano_transacao
