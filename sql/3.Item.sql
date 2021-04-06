BEGIN;

DROP TABLE IF EXISTS gastos.Item CASCADE;

CREATE TABLE gastos.Item (
    descricao VARCHAR(150) PRIMARY KEY
);

INSERT INTO gastos.Item
    SELECT DISTINCT
        descricao
    FROM spectrum.itemlicitacao;

END;