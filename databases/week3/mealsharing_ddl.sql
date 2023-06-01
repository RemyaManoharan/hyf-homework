DROP DATABASE IF EXISTS `meal_sharing`;
CREATE DATABASE IF NOT EXISTS `meal_sharing`;
USE `meal_sharing`;

CREATE TABLE `tbl_meals` (
  `meal_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `meal_date` datetime NOT NULL,
  `max_reservation` int(20) NOT NULL,
  `location` varchar(255) NOT NULL,
  `price` float NOT NULL DEFAULT 0,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`meal_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `tbl_reservation` (
  `reservation_id` int(10) NOT NULL AUTO_INCREMENT,
  `meal_id` int(10) NOT NULL,
  `no_of_guests` int(20) NOT NULL,
  `reservation_date` datetime NOT NULL,
  `status` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `contact_phno` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
   `created_date` datetime NOT NULL,
  PRIMARY KEY (`reservation_id`),
  CONSTRAINT `fk_tbl_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `tbl_meals` (`meal_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `tbl_review` (
  `review_id` int(10) NOT NULL AUTO_INCREMENT,
  `meal_id` int(10) NOT NULL,
 `review_date` datetime NOT NULL,
  `rating` int(5) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`review_id`),
  CONSTRAINT `fk_tbl_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `tbl_meals` (`meal_id`) ON DELETE CASCADE
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
