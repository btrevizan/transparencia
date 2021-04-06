BEGIN;

DROP TABLE IF EXISTS gastos.CartaoPagamento CASCADE;

CREATE TABLE gastos.CartaoPagamento (
    codigo_orgao_superior INTEGER NOT NULL,
    codigo_responsavel VARCHAR(150) NOT NULL,
    codigo_favorecido VARCHAR(150) NOT NULL,
    ano_transacao INTEGER NOT NULL,
    mes_transacao INTEGER NOT NULL,
    valor_transacao DECIMAL NOT NULL,
    tipo_operacao VARCHAR(100) NOT NULL,
    CONSTRAINT fk_orgao_superior
        FOREIGN KEY (codigo_orgao_superior)
        REFERENCES gastos.OrgaoSuperior(codigo)
        ON DELETE CASCADE,
    CONSTRAINT fk_responsavel
        FOREIGN KEY (codigo_responsavel)
        REFERENCES gastos.Pessoa(nome)
        ON DELETE CASCADE,
    CONSTRAINT fk_favorecido
        FOREIGN KEY (codigo_favorecido)
        REFERENCES gastos.Pessoa(nome)
        ON DELETE CASCADE
);

INSERT INTO gastos.CartaoPagamento
    SELECT
        codigo_orgao_superior::integer,
        nome_portador AS codigo_responsavel,
        nome_favorecido AS codigo_favorecido,
        DATE_PART('year', TO_DATE(data_transacao, 'DD/MM/YYYY')) AS ano_transacao,
        DATE_PART('month', TO_DATE(data_transacao, 'DD/MM/YYYY')) AS mes_transacao,
        valor_transacao::decimal,
        transacao AS tipo_operacao
    FROM spectrum.cpgf
    WHERE data_transacao IS NOT NULL;

END;
