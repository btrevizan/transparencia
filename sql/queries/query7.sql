-- Total de licitacoes agrupado por orgao responsavel
SELECT SUM (il.valor_unitario * il.quantidade) AS total, os.nome as orgao_superior
FROM licitacao l
JOIN itemlicitacao il ON l.codigo = il.codigo_licitacao
JOIN orgaosuperior os ON l.codigo_orgao_superior = os.codigo
GROUP BY os.nome
ORDER BY total desc;
