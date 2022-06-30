CREATE TABLE pessoas {
    id INT NOT NULL PRIMARY KEY;
    nome VAR CHAR(30) NOT NULL;
    nascimento DATE
}

INSERT INTO pessoas (nome, nascimento) VALUES ("José", "1992-03-28")

SELECT nome FROM pessoas;
UPDATE pessoas SET nome = "Lucas Aldo"

SELECT * FROM pessoas WHERE id=1
DELETE FROM pessoas WHERE id=1