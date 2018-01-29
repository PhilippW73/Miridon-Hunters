CREATE DATABASE Miridon_db;

USE Miridon_db;

CREATE TABLE user(
    user_id INT NOT NULL AUTO INCREMENT,
    username VARCHAR(30) NOT NULL,
    password PASSWORD NOT NULL,
    user_bio VARCHAR(300),
    profile_image VARCHAR(100),
    wins INT DEFAULT 0,
    losses INT DEFAULT 0,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
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
    class_image VARCHAR(100) NOT NULL,
    strength_point INT NOT NULL,
    speed_point INT NOT NULL,
    skill_point INT NOT NULL,
    ghost_hp INT NOT NULL,
    skills VARCHAR(300),
    PRIMARY KEY (classes_id)
)


INSERT INTO Classes(class_name, class_desc, class_image, strength_point, speed_point, skill_point, ghost_hp, createdAt, updatedAt) VALUES ("Class1", "ABCDABCD", "http://google.com", 100, 90, 40, 40, current_timestamp(), current_timestamp());
INSERT INTO Classes(class_name, class_desc, class_image, strength_point, speed_point, skill_point, ghost_hp, createdAt, updatedAt) VALUES ("Class2", "ZZZZZZZZZZZZZZZZ", "http://google.com", 80, 80, 60, 60, current_timestamp(), current_timestamp());

INSERT INTO Characters(character_name, character_desc, class_name, character_image, strength_point, speed_point, skill_point, ghost_hp, createdAt, updatedAt) VALUES ("Character11", "Char1", "Class1", "http://google.com", 100, 90, 40, 40, current_timestamp(), current_timestamp());
INSERT INTO Characters(character_name, character_desc, class_name, character_image, strength_point, speed_point, skill_point, ghost_hp, createdAt, updatedAt) VALUES ("Character12", "Char2", "Class1", "http://google.com", 80, 100, 40, 80, current_timestamp(), current_timestamp());