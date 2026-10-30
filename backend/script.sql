CREATE DATABASE IF NOT EXISTS db_tasks;

USE db_tasks;

CREATE TABLE IF NOT EXISTS tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT, 
    completed BOOLEAN DEFAULT FALSE
);

INSERT INTO tasks(title, description) VALUES
('Estudar Node', 'Revisar rota do Express'),
('Fazer um banco de dados hackavel','Banco de Dados em sql que possa hackear a NASA');


INSERT INTO tasks(title) VALUES
('Vrum, vrum');

USE db_tasks;
SELECT * FROM tasks;

UPDATE tasks SET completed = 0 WHERE id < 4;
DELETE FROM tasks WHERE id > 3;