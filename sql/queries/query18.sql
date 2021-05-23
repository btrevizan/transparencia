-- Funções de orçamentaria com maiores gastos médios anuais
SELECT
    fo.nome as funcao,
    sum(dpo.valor_transacao) / count(distinct ano_transacao) as total_gasto
FROM gastos.despesaorcamentaria dpo
INNER JOIN gastos.subfuncaoorcamentaria sfo ON dpo.codigo_subfuncao = sfo.codigo
INNER JOIN gastos.funcaoorcamentaria fo ON fo.codigo = sfo.codigo_funcao
GROUP BY fo.nome
ORDER BY total_gasto DESC
LIMIT 15;
