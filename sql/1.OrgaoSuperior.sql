BEGIN;

DROP TABLE IF EXISTS gastos.OrgaoSuperior CASCADE;

CREATE TABLE gastos.OrgaoSuperior (
    codigo INTEGER PRIMARY KEY,
    nome VARCHAR(150) NOT NULL
);

INSERT INTO gastos.OrgaoSuperior
    SELECT DISTINCT
        codigo,
        MAX(nome)
    FROM (
             SELECT codigo_orgao_superior::integer AS codigo,
                    nome_orgao_superior            AS nome
             FROM spectrum.cpgf

             UNION ALL

             SELECT DISTINCT codigo_orgao_superior::integer AS codigo,
                             nome_orgao_superior            AS nome
             FROM spectrum.despesas_execucao

             UNION ALL

             SELECT DISTINCT codigo_do_orgao_superior::integer AS codigo,
                             nome_do_orgao_superior            AS nome
             FROM spectrum.viagem

             UNION ALL

             SELECT DISTINCT codigo_orgao_superior::integer AS codigo,
                             nome_orgao_superior            AS nome
             FROM spectrum.licitacao
         ) AS tbl
    WHERE codigo IS NOT NULL AND nome IS NOT NULL
    GROUP BY codigo;

END;