SELECT product_name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products);