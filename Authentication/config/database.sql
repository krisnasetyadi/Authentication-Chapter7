
CREATE DATABASE jwt_database;

CREATE TABLE user_payments (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    firstname VARCHAR (50) NOT NULL,
    lastname VARCHAR (50) NOT NULL,
    cardnumber VARCHAR (200) NOT NULL,
    cvvnumber INTEGER NOT NULL,
    UNIQUE (cardnumber)
);

CREATE TABLE users_things (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR (50) NOT NULL,
    email VARCHAR (50) NOT NULL,
    password VARCHAR (200) NOT NULL,
    payment_id BIGINT REFERENCES user_payments (id),
    UNIQUE(payment_id),
    UNIQUE (email)
);

CREATE TABLE user_games (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    gamename VARCHAR (50) NOT NULL,
    price NUMERIC (50) NOT NULL,
    UNIQUE (gamename)
);
-- testing table
INSERT INTO users_things (name,email,password)
VALUES ('test','admin@ymail.com','password');

INSERT INTO user_payments (firstname,lastname,cardnumber,cvvnumber)
VALUES ('test','testing','12345678909987654','312');
