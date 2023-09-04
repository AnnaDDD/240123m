SELECT 
*
FROM products 
where price > ( select AVG(Price) from products)