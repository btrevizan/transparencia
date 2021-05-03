BEGIN;

CREATE OR REPLACE VIEW gastos.totais AS
    SELECT ano_transacao, SUM(total), orgao_responsavel
    FROM (
             SELECT ano_transacao,
                    orgao.nome AS orgao_responsavel,
                    SUM(valor_transacao) AS total
             FROM gastos.cartaopagamento AS cp
             INNER JOIN gastos.orgaosuperior AS orgao ON (orgao.codigo = cp.codigo_orgao_superior)
             GROUP BY ano_transacao, orgao.nome

             UNION ALL

             SELECT ano_transacao,
                    orgao.nome AS orgao_responsavel,
                    SUM(valor_transacao) AS total
             FROM gastos.despesaorcamentaria AS desp
             INNER JOIN gastos.orgaosuperior AS orgao ON (orgao.codigo = desp.codigo_orgao_superior)
             GROUP BY ano_transacao, orgao.nome

             UNION ALL

             SELECT ano_transacao,
                    orgao.nome AS orgao_responsavel,
                    SUM(quantidade * valor_unitario) AS total
             FROM gastos.itemlicitacao AS item
             INNER JOIN gastos.licitacao AS lic ON (lic.codigo = item.codigo_licitacao)
             INNER JOIN gastos.orgaosuperior AS orgao ON (orgao.codigo = lic.codigo_orgao_superior)
             GROUP BY ano_transacao, orgao.nome

             UNION ALL

             SELECT ano_transacao,
                    orgao.nome AS orgao_responsavel,
                    SUM(valor_diarias + valor_passagens + outros_gastos) AS total
             FROM gastos.viagem AS v
             INNER JOIN gastos.orgaosuperior AS orgao ON (orgao.codigo = v.codigo_orgao_superior)
             GROUP BY ano_transacao, orgao.nome
         ) AS tbl
    GROUP BY ano_transacao, orgao_responsavel
    ORDER BY ano_transacao, orgao_responsavel;

END;