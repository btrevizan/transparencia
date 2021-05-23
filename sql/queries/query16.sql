-- Ranking de portadores com mais gastos no cartao de pagamento
SELECT
    p.nome,
    SUM(cp.valor_transacao) AS total
FROM gastos.cartaopagamento AS cp
INNER JOIN gastos.pessoa AS p ON p.nome = cp.codigo_responsavel
GROUP BY p.nome
ORDER BY total DESC
LIMIT 15;