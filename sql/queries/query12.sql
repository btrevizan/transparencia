-- Média dos valores das diárias em viagens agrupado por ano
SELECT
    ano_transacao as ano,
    avg(valor_diarias) AS media_diarias
FROM
	gastos.viagem v
GROUP BY
	ano_transacao
ORDER BY ano_transacao;
