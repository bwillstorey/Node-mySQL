DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100),
department_name VARCHAR(100),
price DECIMAL(8,2),
stock_quantity INTEGER(10),
PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
("Gummy Bears", "Pantry", 10.99, 30),
("Tennis Shoes", "Apparel", 45.98, 83),
("Windshield Wipers", "Automotive", 12.99, 10),
("Decorative Pillow", "Home Decor", 23.50, 13),
("Hiking Boots", "Apparel", 70.99, 40),
("Vitamins", "Health", 7.99, 62),
("Airpods", "Electronics", 159.99, 4),
("Almond Butter", "Pantry", 11.99, 7),
("This is Spinal Tap", "Video/DVD", 11.11, 11),
("iPhone Cable", "Electronics", 19.99, 12)
 