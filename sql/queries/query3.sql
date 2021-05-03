-- Dilma (até AGOSTO de 2016)
SELECT 'Dilma Rousseff' AS president,
       SUM(CASE WHEN ano_transacao = 2016 AND mes_transacao > 8 THEN 0 ELSE total END) AS total
FROM gastos.totais
WHERE ano_transacao BETWEEN 2014 AND 2016

UNION ALL

-- Temer (de SETEMBRO de 2016 até 2018)
SELECT 'Michel Temer' AS president,
       SUM(CASE WHEN ano_transacao = 2016 AND mes_transacao <= 8 THEN 0 ELSE total END) AS total
FROM gastos.totais
WHERE ano_transacao BETWEEN 2016 AND 2018

UNION ALL

-- Bolsonaro (2019 até agora)
SELECT 'Jair Bolsonaro' AS president,
       SUM(total) AS total
FROM gastos.totais
WHERE ano_transacao BETWEEN 2019 AND 2021