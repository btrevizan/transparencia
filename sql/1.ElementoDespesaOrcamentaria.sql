BEGIN;

DROP TABLE IF EXISTS gastos.ElementoDespesaOrcamentaria CASCADE;

CREATE TABLE gastos.ElementoDespesaOrcamentaria (
    codigo INTEGER PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

INSERT INTO gastos.ElementoDespesaOrcamentaria
    SELECT DISTINCT
        codigo_elemento_de_despesa::integer AS codigo,
        nome_elemento_de_despesa AS nome
    FROM spectrum.despesas_execucao;

END;