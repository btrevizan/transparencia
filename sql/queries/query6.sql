-- Total de licitacoes agrupado por ano
SELECT SUM (il.valor_unitario * il.quantidade) AS total, l.ano_transacao as ano
FROM licitacao l
JOIN itemlicitacao il ON l.codigo = il.codigo_licitacao
GROUP BY ano
ORDER BY ano;
