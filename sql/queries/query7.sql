-- Total de licitacoes agrupado por orgao responsavel
SELECT os.nome as orgao_superior, SUM (il.valor_unitario) AS total
FROM gastos.licitacao l
JOIN gastos.itemlicitacao il ON l.codigo = il.codigo_licitacao
JOIN gastos.orgaosuperior os ON l.codigo_orgao_superior = os.codigo
GROUP BY os.nome
ORDER BY total desc
LIMIT 10;
