BEGIN;

DROP TABLE IF EXISTS gastos.GrupoDespesaOrcamentaria CASCADE;

CREATE TABLE gastos.GrupoDespesaOrcamentaria (
    codigo INTEGER PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

INSERT INTO gastos.GrupoDespesaOrcamentaria
    SELECT DISTINCT
        CASE WHEN codigo_grupo_de_despesa = 'I' THEN -1 ELSE codigo_grupo_de_despesa::integer END AS codigo,
        nome_grupo_de_despesa AS nome
    FROM spectrum.despesas_execucao;

END;