-- Funções orçamentarias com maiores gastos agrupados por órgao responsável
SELECT
    os.nome as orgao_superior,
    fo.nome as funcao,
    sum(dpo.valor_transacao) as total_gasto
FROM gastos.despesaorcamentaria dpo
JOIN gastos.subfuncaoorcamentaria sfo ON dpo.codigo_subfuncao = sfo.codigo
JOIN gastos.funcaoorcamentaria fo ON fo.codigo = sfo.codigo_funcao
JOIN gastos.orgaosuperior os ON dpo.codigo_orgao_superior = os.codigo
GROUP BY os.nome, fo.nome
ORDER BY total_gasto DESC
LIMIT 15;
