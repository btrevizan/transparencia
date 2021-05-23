-- Ranking das viagens mais caras agrupadas por orgao responsavel
SELECT
    os.nome as orgao_superior,
    max(valor_diarias + valor_passagens + outros_gastos) AS total
FROM gastos.viagem v
JOIN gastos.orgaosuperior os ON v.codigo_orgao_superior = os.codigo
GROUP BY
	os.nome
ORDER BY total DESC
LIMIT 15;
