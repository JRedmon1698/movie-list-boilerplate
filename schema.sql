DROP DATABASE movie_list;
CREATE DATABASE movie_list;

USE movie_list;

CREATE TABLE movies (title VARCHAR(250) NOT NULL, director VARCHAR(250) NOT NULL, release_date INT NOT NULL);

INSERT INTO movies (title, director, release_date) VALUES ("Fight Club", "David Fincher", 1999);