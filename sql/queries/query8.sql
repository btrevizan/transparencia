-- Gastos com viagens agrupado por ano
SELECT ano_transacao, SUM (valor_diarias::float + valor_passagens::float) AS total
FROM gastos.viagem
GROUP BY ano_transacao
ORDER BY ano_transacao ASC;