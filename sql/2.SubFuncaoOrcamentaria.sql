BEGIN;

DROP TABLE IF EXISTS gastos.SubFuncaoOrcamentaria CASCADE;

CREATE TABLE gastos.SubFuncaoOrcamentaria (
    codigo INTEGER PRIMARY KEY,
    codigo_funcao INTEGER NOT NULL,
    nome VARCHAR(50) NOT NULL,
    CONSTRAINT fk_funcao
        FOREIGN KEY (codigo_funcao)
        REFERENCES gastos.FuncaoOrcamentaria(codigo)
        ON DELETE CASCADE
);

INSERT INTO gastos.SubFuncaoOrcamentaria
    SELECT DISTINCT
        MAX(codigo_subfucao)::integer AS codigo,
        MAX(codigo_funcao)::integer AS codigo_funcao,
        nome_subfuncao AS nome
    FROM spectrum.despesas_execucao
    GROUP BY nome_subfuncao;

END;
