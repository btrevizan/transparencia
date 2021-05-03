-- Gasto total agrupado por ano
SELECT ano_transacao, SUM(total)
FROM (
         SELECT ano_transacao,
                SUM(valor_transacao) AS total
         FROM gastos.cartaopagamento
         GROUP BY ano_transacao

         UNION ALL

         SELECT ano_transacao,
                SUM(valor_transacao) AS total
         FROM gastos.despesaorcamentaria
         GROUP BY ano_transacao

         UNION ALL

         SELECT ano_transacao,
                SUM(quantidade * valor_unitario) AS total
         FROM gastos.itemlicitacao AS item
                  INNER JOIN gastos.licitacao AS lic ON (lic.codigo = item.codigo_licitacao)
         GROUP BY ano_transacao

         UNION ALL

         SELECT ano_transacao,
                SUM(valor_diarias + valor_passagens + outros_gastos) AS total
         FROM gastos.viagem
         GROUP BY ano_transacao
     ) AS tbl
GROUP BY ano_transacao
ORDER BY ano_transacao
