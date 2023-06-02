USE meal_sharing;
-- GET ALL MEALS
SELECT title FROM meal;
-- Add a new meal
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date) 
VALUES 
  (1, 'Italian Pasta', 'pasta authentic Italian dish with tomato and chicken', 'Frankfurt', '2023-05-31 18:30:00', 10, 50.99, NOW()),
  (2, 'Spegatti', 'Spegatti authentic Italian dish with tomato and beef', 'Nyhavn', '2023-04-30 14:30:00', 9, 30.99, NOW()),
  (3, 'Chicken soup', 'Chicken soup made with chicken and corn with fresh cream and pepper', 'Jutland', '2023-06-15 18:30:00', 15, 25, NOW());

 -- GET A MEAL WITH ID fx 1
SELECT title 
FROM meal 
WHERE id = 1;
-- UPDATE a meal with any id
UPDATE meal
SET title = 'Chicken Pasta'
WHERE id = 1;
-- delete a meal with any id 
DELETE 
FROM meal
WHERE id = 2 ;
-- GET ALL RESERVATIONS
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2 ,5 ,1, CURDATE(), '6789126711','Roy', 'royvarghese@gmail.com'),
(1 ,4,2, CURDATE(), '6711345678','John' ,'johnabhram@gmail.com*');
-- get all reservations
SELECT * 
FROM reservation ;
-- get a reservation with a id
SELECT * 
FROM reservation 
WHERE id = 2;
-- update a reservation with any id
UPDATE reservation 
SET number_of_guests = 5
WHERE id = 2 ;
-- delete a reservation with any id
DELETE FROM reservation
WHERE id =1 ;
-- get all reviews
SELECT * FROM review;
-- add  new reviews
INSERT INTO review (id, title, description, meal_id, stars, created_date) 
VALUES (2,'Good','food was delicious and spicy',1,4,CURDATE()),
  (1,'Average','yummy spegatti',2,3,CURDATE());
  -- get a review with any id 
SELECT * 
FROM review 
WHERE id = 1;
-- update a review specific id
UPDATE review 
SET stars = 5
WHERE id = 1;
-- delete review with any id
DELETE FROM review
WHERE id = 1;

-- additional queries
-- get meals price smaller than specific price
SELECT id,title ,price
FROM meal
WHERE price <= 50 ;
-- get meals that still has avalibale reservation
SELECT m.title 
FROM meal m
WHERE m.max_reservations > (SELECT COUNT(*) FROM reservation r WHERE r.meal_id = m.id);
-- Get meals that partially match a title. 
SELECT title 
FROM meal 
WHERE title LIKE '%pasta%';
  -- get all meals that are created between two dates
SELECT *
FROM meal
WHERE created_date >= '2023-05-20 18:30:00' AND created_date <= '2023-06-01 18:30:00';
-- Get only specific number of meals fx return only 5 meals
SELECT title
FROM meal
LIMIT 2;
-- Get the meals that have good reviews
SELECT meal.title, review.stars 
FROM  meal
RIGHT JOIN
    review ON meal.id = review.meal_id
WHERE stars >= 4;
-- Get reservations for a specific meal sorted by created_date
SELECT m.title, r.created_date
FROM  meal m
RIGHT JOIN
    reservation r ON m.id = r.meal_id
WHERE  m.title = 'Spegatti'
ORDER BY created_date DESC;    
-- Sort all meals by average number of stars in the reviews
SELECT m.title, AVG(stars) AS avg_rating
FROM meal m
RIGHT JOIN
    review rv ON m.id = rv.meal_id
GROUP BY m.title
ORDER BY AVG(stars) DESC;  
