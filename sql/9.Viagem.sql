BEGIN;

DROP TABLE IF EXISTS gastos.Viagem CASCADE;

CREATE TABLE gastos.Viagem (
    codigo_orgao_superior INTEGER NOT NULL,
    codigo_favorecido VARCHAR(150) NOT NULL,
    motivo TEXT,
    ano_transacao INTEGER NOT NULL,
    mes_transacao INTEGER NOT NULL,
    valor_diarias DECIMAL NOT NULL,
    valor_passagens DECIMAL NOT NULL,
    outros_gastos DECIMAL NOT NULL,
    CONSTRAINT fk_orgao_superior
        FOREIGN KEY (codigo_orgao_superior)
        REFERENCES gastos.OrgaoSuperior(codigo)
        ON DELETE CASCADE,
    CONSTRAINT fk_favorecido
        FOREIGN KEY (codigo_favorecido)
        REFERENCES gastos.Pessoa(nome)
        ON DELETE CASCADE
);

INSERT INTO gastos.Viagem
    SELECT
        codigo_do_orgao_superior::integer,
        nome AS codigo_favorecido,
        viagem.motivo AS motivo,
        DATE_PART('year', TO_DATE(periodo_data_de_inicio, 'YYYY/MM')) AS ano_transacao,
        DATE_PART('month', TO_DATE(periodo_data_de_inicio, 'YYYY/MM')) AS mes_transacao,
        valor_diarias AS valor_diarias,
        REPLACE(valor_passagens, ';', '.')::DECIMAL AS valor_passagens,
        REPLACE(valor_outros_gastos, ';', '.')::DECIMAL AS outros_gastos
    FROM spectrum.viagem AS viagem
    WHERE situacao = 'Realizada';

END;