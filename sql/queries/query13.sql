-- Ranking dos itens mais comuns comprados em licitações agrupado por órgão responsável
SELECT
    i.descricao,
    count(1) AS frequencia
FROM gastos.itemlicitacao AS il
INNER JOIN gastos.item AS i ON i.descricao = il.codigo_item
GROUP BY i.descricao
ORDER BY frequencia DESC
LIMIT 15;