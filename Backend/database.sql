CREATE TABLE `admin` (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    hashedPassword VARCHAR(255) NOT NULL
);

CREATE TABLE `price` (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    cat_premium_min INTEGER NOT NULL,
    cat_premium_max INTEGER NOT NULL,
    cat_a_min INTEGER NOT NULL,
    cat_a_max INTEGER NOT NULL,
    cat_b_min INTEGER NOT NULL,
    cat_b_max INTEGER NOT NULL,
    cat_c_min INTEGER NOT NULL,
    cat_c_max INTEGER NOT NULL,
    cat_d_min INTEGER NOT NULL,
    cat_d_max INTEGER NOT NULL
);

INSERT INTO `admin` (username, email, hashedPassword) VALUES ('Bob', 'bob@caramail.fr', 'azerty');

INSERT INTO `price` (cat_premium_min, cat_premium_max, cat_a_min, cat_a_max, cat_b_min, cat_b_max, cat_c_min, cat_c_max, cat_d_min, cat_d_max) VALUES (151, 180, 121, 150, 91, 120, 61, 90, 30, 60);
