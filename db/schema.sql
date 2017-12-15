DROP DATABASE IF EXISTS salad_db;

CREATE DATABASE salad_db;

USE salad_db;

CREATE TABLE salads (
id INT AUTO_INCREMENT NOT NULL,
topping VARCHAR(30) NOT NULL,
devoured BOOLEAN NOT NULL,
date TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);
