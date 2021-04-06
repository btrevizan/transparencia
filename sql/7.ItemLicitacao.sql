BEGIN;

DROP TABLE IF EXISTS gastos.ItemLicitacao CASCADE;

CREATE TABLE gastos.ItemLicitacao (
    codigo_licitacao VARCHAR(150) NOT NULL,
    codigo_favorecido VARCHAR(150),
    codigo_item VARCHAR(150),
    quantidade INTEGER NOT NULL,
    valor_unitario DECIMAL NOT NULL,
    CONSTRAINT fk_licitacao
        FOREIGN KEY (codigo_licitacao)
        REFERENCES gastos.Licitacao(codigo)
        ON DELETE CASCADE,
    CONSTRAINT fk_favorecido
        FOREIGN KEY (codigo_favorecido)
        REFERENCES gastos.Pessoa(nome)
        ON DELETE CASCADE,
    CONSTRAINT fk_item
        FOREIGN KEY (codigo_item)
        REFERENCES gastos.Item(descricao)
        ON DELETE CASCADE
);

INSERT INTO gastos.ItemLicitacao
    SELECT
        licitacao.codigo AS codigo_contrato,
        compra.nome_vencedor As codigo_favorecido,
        compra.descricao AS codigo_item,
        compra.quantidade_item::integer AS quantidade,
        compra.valor_item AS valor_unitario
    FROM gastos.Licitacao AS licitacao
    LEFT JOIN spectrum.itemlicitacao AS compra ON (licitacao.codigo = CONCAT(compra.numero_licitacao, compra.numero_processo, compra.codigo_orgao, compra.codigo_ug, compra.codigo_modalidade_compra))
    WHERE compra.valor_item > 0;

END;
