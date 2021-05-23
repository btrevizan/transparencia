-- Ranking das funcoes (Ministerios) com maior numero de gastos
SELECT
    orgao_responsavel,
    count(1) AS frequencia
FROM (
     SELECT orgao.nome AS orgao_responsavel
     FROM gastos.cartaopagamento AS cp
     INNER JOIN gastos.orgaosuperior AS orgao ON (orgao.codigo = cp.codigo_orgao_superior)

     UNION ALL

     SELECT orgao.nome AS orgao_responsavel
     FROM gastos.despesaorcamentaria AS desp
     INNER JOIN gastos.orgaosuperior AS orgao ON (orgao.codigo = desp.codigo_orgao_superior)

     UNION ALL

     SELECT orgao.nome AS orgao_responsavel
     FROM gastos.itemlicitacao AS item
     INNER JOIN gastos.licitacao AS lic ON (lic.codigo = item.codigo_licitacao)
     INNER JOIN gastos.orgaosuperior AS orgao ON (orgao.codigo = lic.codigo_orgao_superior)

     UNION ALL

     SELECT orgao.nome AS orgao_responsavel
     FROM gastos.viagem AS v
     INNER JOIN gastos.orgaosuperior AS orgao ON (orgao.codigo = v.codigo_orgao_superior)
 ) AS tbl
GROUP BY orgao_responsavel
ORDER BY frequencia DESC
LIMIT 15;