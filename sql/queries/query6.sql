-- Total de licitacoes agrupado por ano
SELECT l.ano_transacao as ano, SUM(il.valor_unitario) AS total
FROM gastos.licitacao l
JOIN gastos.itemlicitacao il ON l.codigo = il.codigo_licitacao
GROUP BY ano
ORDER BY ano;
