CREATE TABLE
    `user` (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        username VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        hashedPassword varchar(255) NOT NULL,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        is_admin TINYINT DEFAULT 0
    );