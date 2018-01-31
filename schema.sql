CREATE DATABASE Miridon_db;

USE Miridon_db;

CREATE TABLE user(
    user_id INT NOT NULL AUTO INCREMENT,
    email VARCHAR(30) NOT NULL,
    password PASSWORD NOT NULL,
    user_name VARCHAR(30),
    user_bio VARCHAR(300),
    profile_image VARCHAR(100),
    wins INT DEFAULT 0,
    losses INT DEFAULT 0,
    last_played INT,
    PRIMARY KEY (user_id)
)

CREATE TABLE characters(
    character_id INT NOT NULL AUTO INCREMENT,
    character_name VARCHAR(100) NOT NULL,
    character_desc VARCHAR(400),
    class_name VARCHAR(100) NOT NULL,
    image VARCHAR(100) NOT NULL,
    strength_point INT NOT NULL,
    speed_point INT NOT NULL,
    skill_point INT NOT NULL,
    ghost_hp INT NOT NULL,
    skills VARCHAR(300),
    created_by INT NOT NULL,
    PRIMARY KEY (character_id)
)

CREATE TABLE classes(
    classes_id INT NOT NULL AUTO INCREMENT,
    class_name VARCHAR(100) NOT NULL,
    classs_desc VARCHAR(400),
    image VARCHAR(100) NOT NULL,
    strength_point INT NOT NULL,
    speed_point INT NOT NULL,
    skill_point INT NOT NULL,
    ghost_hp INT NOT NULL,
    skills VARCHAR(300),
    PRIMARY KEY (classes_id)
)