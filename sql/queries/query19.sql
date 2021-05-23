-- Subfunções de orçamentaria com maiores gastos médios anuais
SELECT
    sfo.nome as sub_funcao,
	sum(dpo.valor_transacao) / count(distinct ano_transacao) as total
FROM gastos.despesaorcamentaria dpo
INNER JOIN gastos.subfuncaoorcamentaria sfo ON dpo.codigo_subfuncao = sfo.codigo
GROUP BY sfo.nome
ORDER BY total DESC
LIMIT 15;
