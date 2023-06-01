USE meal_sharing ;
-- GET ALL MEALS
SELECT title FROM tbl_meals;
-- Add a new meal
INSERT INTO tbl_meals(meal_id, title, description,meal_date, max_reservation,location,price,created_date)
VALUES (1 , 'Italian Pasta','pasta authentic Italian dish with tomato and chicken',' 2023-05-31 18:30:00',10, 'Frankfurt', 20.99 , NOW()),
       (2, 'Spegatti','Spegatti authentic Italian dish with tomato and beaf',' 2023-05-31 18:30:00',9, 'Nyhavn', 30.99 , NOW()),
       (3, 'Chicken soup','Chicken soup made with chicken and corn with fresh cream and pepper',' 2023-05-31 18:30:00',15, 'Jutland', 25 , NOW());
 -- GET A MEAL WITH ID fx 1
SELECT title FROM tbl_meals WHERE meal_id = 1;
-- UPDATE a meal with any id
UPDATE tbl_meals
SET title = 'Chicken Pasta'
WHERE meal_id = 1;
-- delete a meal with any id 
DELETE 
 FROM tbl_meals
 WHERE meal_id = 2 ;

-- GET ALL RESERVATIONS
INSERT INTO tbl_reservation(reservation_id,meal_id,no_of_guests,reservation_date,status,location,contact_phno,contact_email,created_date)
VALUES (2 ,2 ,5 , '2023-06-11 18:30:00' , 'booked','Nyhavn', '6789126711' , 'royvarghese@gmail.com' ,NOW()),
(1 ,1 ,5 , '2023-06-15 18:30:00' , 'cancel','frankfurt', '6711345678' , 'johnabhram@gmail.com' ,NOW());
-- get all reservations
SELECT * FROM
tbl_reservation ;
-- get a reservation with a id
SELECT * FROM tbl_reservation WHERE reservation_id = 2;
-- update a reservation with any id
UPDATE tbl_reservation 
SET no_of_guests = 5
WHERE reservation_id = 2 ;
-- delete a reservation with any id
DELETE FROM tbl_reservation
WHERE reservation_id =1 ;

-- get all reviews
SELECT * FROM tbl_review;
-- add  new reviews
INSERT INTO tbl_review(review_id,meal_id,review_date,rating,description)
VALUES (2,1,' 2023-05-31 18:30:00',4,'food was delicious and spicy'),
  (1,2,' 2023-05-11 18:30:00',3,'yummy spegatti');
  -- get a review with any id 
  SELECT * FROM tbl_review WHERE review_id = 1;
  -- update a review specific id
  UPDATE tbl_review 
  SET rating = 5
  WHERE review_id = 1;
  -- delete review with any id
  DELETE FROM tbl_review
  WHERE review_id = 1;
  
  -- additional queries
  -- get meals price smaller than specific price
  SELECT meal_id,title 
  FROM tbl_meals
  WHERE price <= 30 ;
  -- get meals that still has avalibale reservation
  SELECT m.title 
  FROM tbl_meals m
  WHERE m.max_reservation > (SELECT COUNT(*) FROM tbl_reservation r WHERE r.meal_id = m.meal_id);
  -- Get meals that partially match a title. 
SELECT title FROM tbl_meals WHERE title LIKE '%pasta%';
  -- get all meals that are created between two dates
SELECT *
FROM tbl_meals
WHERE created_date >= '2023-05-20 18:30:00' AND created_date <= '2023-06-01 18:30:00';
-- Get only specific number of meals fx return only 5 meals
SELECT title
FROM tbl_meals
LIMIT 2;
-- Get the meals that have good reviews
SELECT 
   tbl_meals.title, tbl_review.rating
FROM
    tbl_meals
        RIGHT JOIN
    tbl_review ON tbl_meals.meal_id = tbl_review.meal_id
WHERE
    rating >= 4;
-- Get reservations for a specific meal sorted by created_date
SELECT 
    m.title, r.created_date
FROM
    tbl_meals m
        RIGHT JOIN
    tbl_reservation r ON m.meal_id = r.meal_id
WHERE
    m.title = 'Spegatti'
ORDER BY created_date DESC;    
-- Sort all meals by average number of stars in the reviews
SELECT 
    m.title, AVG(rating) AS avg_rating
FROM
    tbl_meals m
        RIGHT JOIN
    tbl_review rv ON m.meal_id = rv.meal_id
GROUP BY m.title
ORDER BY AVG(rating) DESC;  
