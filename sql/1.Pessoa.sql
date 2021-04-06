BEGIN;

DROP TABLE IF EXISTS gastos.Pessoa CASCADE;

CREATE TABLE gastos.Pessoa (
    nome VARCHAR(150) PRIMARY KEY,
    tipo CHAR(1) NOT NULL
);

INSERT INTO gastos.Pessoa
    SELECT DISTINCT
        nome,
        MAX(tipo)
    FROM (
        SELECT
            nome_portador AS nome,
            'F' AS tipo
        FROM spectrum.cpgf

        UNION ALL

        SELECT
            nome_favorecido AS nome,
            CASE WHEN LENGTH(cnpj_ou_cpf_favorecido) = 11 THEN 'F' ELSE 'J' END AS tipo
        FROM spectrum.cpgf

        UNION ALL

        SELECT
            nome AS nome,
            'F' AS tipo
        FROM spectrum.viagem

        UNION ALL

        SELECT
            nome_vencedor AS nome,
            'J' AS tipo
        FROM spectrum.itemlicitacao
    ) AS tbl
    WHERE nome IS NOT NULL
    GROUP BY nome;

END;