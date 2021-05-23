-- Ranking dos favorecidos nas compras por cartão de pagamento agrupado por ano e por tipo de aquisição
SELECT
    p.nome,
    SUM(cp.valor_transacao) AS total
FROM gastos.cartaopagamento AS cp
INNER JOIN gastos.pessoa AS p ON p.nome = cp.codigo_favorecido
GROUP BY p.nome
ORDER BY total DESC
LIMIT 15;
