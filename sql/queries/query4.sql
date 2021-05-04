-- Gastos de cartoes de pagamento agrupado por ano
SELECT ano_transacao, SUM (valor_transacao::float) AS total_transacao
FROM cartaopagamento
GROUP BY ano_transacao
ORDER BY ano_transacao ASC;