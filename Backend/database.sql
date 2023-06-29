CREATE TABLE
    `user` (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        username VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        hashedPassword varchar(255) NOT NULL,
        is_admin TINYINT DEFAULT 0
    );

    CREATE TABLE
    `price`(
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        cat_premium INTEGER NOT NULL,
        cat_a INTEGER NOT NULL,
        cat_b INTEGER NOT NULL,
        cat_c INTEGER NOT NULL,
        cat_d INTEGER NOT NULL,
    );