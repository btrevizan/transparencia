-- Gastos com viagens agrupado por orgao responsavel
SELECT os.nome, SUM (valor_diarias::float + valor_passagens::float) AS total
FROM gastos.viagem v
JOIN gastos.orgaosuperior os ON v.codigo_orgao_superior = os.codigo
GROUP BY os.nome
ORDER BY total DESC;
