BEGIN;

DROP TABLE IF EXISTS gastos.DespesaOrcamentaria CASCADE;

CREATE TABLE gastos.DespesaOrcamentaria (
    codigo_orgao_superior INTEGER NOT NULL,
    codigo_subfuncao INTEGER NOT NULL,
    codigo_grupo INTEGER NOT NULL,
    codigo_elemento INTEGER NOT NULL,
    ano_transacao INTEGER NOT NULL,
    mes_transacao INTEGER NOT NULL,
    valor_transacao DECIMAL NOT NULL,
    CONSTRAINT fk_orgao_superior
        FOREIGN KEY (codigo_orgao_superior)
        REFERENCES gastos.OrgaoSuperior(codigo)
        ON DELETE CASCADE,
    CONSTRAINT fk_subfuncao
        FOREIGN KEY (codigo_subfuncao)
        REFERENCES gastos.SubFuncaoOrcamentaria(codigo)
        ON DELETE CASCADE,
    CONSTRAINT fk_grupo
        FOREIGN KEY (codigo_grupo)
        REFERENCES gastos.GrupoDespesaOrcamentaria(codigo)
        ON DELETE CASCADE,
    CONSTRAINT fk_elemento
        FOREIGN KEY (codigo_elemento)
        REFERENCES gastos.ElementoDespesaOrcamentaria(codigo)
        ON DELETE CASCADE
);

INSERT INTO gastos.DespesaOrcamentaria
    SELECT
        codigo_orgao_superior::integer,
        codigo_subfucao::integer AS codigo_subfuncao,
        CASE WHEN codigo_grupo_de_despesa = 'I' THEN -1 ELSE codigo_grupo_de_despesa::integer END AS codigo_grupo,
        codigo_elemento_de_despesa::integer AS codigo_elemento,
        DATE_PART('year', TO_DATE(ano_e_mes_do_lancamento, 'YYYY/MM')) AS ano_transacao,
        DATE_PART('month', TO_DATE(ano_e_mes_do_lancamento, 'YYYY/MM')) AS mes_transacao,
        valor_pago::decimal AS valor_transacao
    FROM spectrum.despesas_execucao
    WHERE ano_e_mes_do_lancamento IS NOT NULL;

END;
