CREATE TABLE `admin` (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    hashedPassword VARCHAR(255) NOT NULL
);

CREATE TABLE `price` (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    cat_premium INTEGER NOT NULL,
    cat_a INTEGER NOT NULL,
    cat_b INTEGER NOT NULL,
    cat_c INTEGER NOT NULL,
    cat_d INTEGER NOT NULL
);

INSERT INTO `admin` (username, email, hashedPassword) VALUES ('Bob', 'bob@caramail.fr', 'azerty');

INSERT INTO `price` (cat_premium, cat_a, cat_b, cat_c, cat_d) VALUES (100, 80, 60, 40, 20);
