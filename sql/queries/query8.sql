-- Gastos com viagens agrupado por ano
SELECT SUM (valor_diarias::float + valor_passagens::float) AS total, ano_transacao
FROM viagem
GROUP BY ano_transacao
ORDER BY ano_transacao ASC;