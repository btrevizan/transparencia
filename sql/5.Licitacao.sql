BEGIN;

DROP TABLE IF EXISTS gastos.Licitacao CASCADE;

CREATE TABLE gastos.Licitacao (
    codigo VARCHAR(150) PRIMARY KEY,
    codigo_orgao_superior INTEGER DEFAULT NULL,
    ano_transacao INTEGER NOT NULL,
    mes_transacao INTEGER NOT NULL,
    CONSTRAINT fk_orgao_superior
        FOREIGN KEY (codigo_orgao_superior)
        REFERENCES gastos.OrgaoSuperior(codigo)
        ON DELETE CASCADE
);

INSERT INTO gastos.Licitacao
    SELECT
        CONCAT(numero_licitacao, numero_processo, codigo_orgao, codigo_ug, codigo_modalidade_compra) AS codigo,
        codigo_orgao_superior::integer AS codigo_orgao_superior,
        DATE_PART('year', TO_DATE(data_resultado_compra, 'DD/MM/YYYY')) AS ano_transacao,
        DATE_PART('month', TO_DATE(data_resultado_compra, 'DD/MM/YYYY')) AS mes_transacao
    FROM spectrum.licitacao
    WHERE situacao_licitacao IN ('Publicado', 'Encerrado')
    AND valor_licitacao > 0
    AND codigo_orgao IS NOT NULL;

END;
