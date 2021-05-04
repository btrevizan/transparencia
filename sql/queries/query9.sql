-- Gastos com viagens agrupado por orgao responsavel
SELECT SUM (valor_diarias::float + valor_passagens::float) AS total, os.nome
FROM viagem v
JOIN orgaosuperior os ON v.codigo_orgao_superior = os.codigo
GROUP BY os.nome
ORDER BY total DESC;
