-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2023 at 05:39 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food_io`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_reviews`
--

CREATE TABLE `restaurant_reviews` (
  `id` int(11) NOT NULL,
  `restaurant_name` varchar(100) NOT NULL,
  `restaurant_rating` int(11) NOT NULL,
  `restaurant_review` varchar(500) NOT NULL,
  `restaurant_city` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurant_reviews`
--

INSERT INTO `restaurant_reviews` (`id`, `restaurant_name`, `restaurant_rating`, `restaurant_review`, `restaurant_city`) VALUES
(15, 'uki uki', 5, 'o matko jakie dombre', 'Warszawa'),
(23, 'yetztu', 4, 'fajne kluchy', 'Poznan'),
(24, 'brand sushi', 5, 'absolute banger', 'Poznan'),
(25, 'Fat Bob', 5, 'Best Borgar I ever had.', 'Poznan'),
(27, 'yetztu', 4, 'Badzo dobry ramen :)', 'Poznan'),
(28, 'yetztu', 5, 'O JAKI DOBRY RAAMEN', 'Poznan'),
(31, 'Zen On', 5, 'Literally, really, for real, actually... the very best food i have ever eaten in my entire life.', 'Poznan'),
(32, 'Mario Pizza', 4, 'Dobra pizza, ale czegoś jej brakuje.', 'Warszawa'),
(33, 'Roma', 3, '3/5, więcej nie dam.', 'Warszawa'),
(34, 'uki uki', 4, 'jezu jakie to dobre', 'Warszawa'),
(35, 'Roma', 2, 'Nie lubie włoskiego żarcia.', 'Warszawa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurant_reviews`
--
ALTER TABLE `restaurant_reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurant_reviews`
--
ALTER TABLE `restaurant_reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
