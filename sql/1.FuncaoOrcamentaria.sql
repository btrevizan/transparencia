BEGIN;

DROP TABLE IF EXISTS gastos.FuncaoOrcamentaria CASCADE;

CREATE TABLE gastos.FuncaoOrcamentaria (
    codigo INTEGER PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

INSERT INTO gastos.FuncaoOrcamentaria
    SELECT DISTINCT
        codigo_funcao::integer AS codigo,
        nome_funcao AS nome
    FROM spectrum.despesas_execucao;

END;