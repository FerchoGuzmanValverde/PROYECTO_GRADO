-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.31 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for db_breastcancer
CREATE DATABASE IF NOT EXISTS `db_breastcancer` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_breastcancer`;

-- Dumping structure for table db_breastcancer.biopsy
CREATE TABLE IF NOT EXISTS `biopsy` (
  `idBiopsy` int NOT NULL AUTO_INCREMENT,
  `radioMean` double(7,6) NOT NULL,
  `textureMean` double(7,6) NOT NULL,
  `smoothnessMean` double(7,6) NOT NULL,
  `compactnessMean` double(7,6) NOT NULL,
  `symmetryMean` double(7,6) NOT NULL,
  `fractalDimensionMean` double(7,6) NOT NULL,
  `radiusSE` double(7,6) NOT NULL,
  `textureSE` double(7,6) NOT NULL,
  `smoothnessSE` double(7,6) NOT NULL,
  `concavePointsSE` double(7,6) NOT NULL,
  `symmetrySE` double(7,6) NOT NULL,
  `symmetryWorst` double(7,6) NOT NULL,
  `fractalDimensionWorst` double(7,6) NOT NULL,
  `diagnostic` tinyint NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `updateDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `idHistory` int NOT NULL,
  PRIMARY KEY (`idBiopsy`),
  KEY `idHistory_B` (`idHistory`),
  CONSTRAINT `idHistory_B` FOREIGN KEY (`idHistory`) REFERENCES `history` (`idHistory`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_breastcancer.biopsy: ~0 rows (approximately)

-- Dumping structure for table db_breastcancer.history
CREATE TABLE IF NOT EXISTS `history` (
  `idHistory` int NOT NULL AUTO_INCREMENT,
  `historyCode` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `creationDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `idPatient` int NOT NULL,
  PRIMARY KEY (`idHistory`),
  KEY `idPatient` (`idPatient`),
  CONSTRAINT `idPatient` FOREIGN KEY (`idPatient`) REFERENCES `patient` (`idPatient`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_breastcancer.history: ~2 rows (approximately)
INSERT INTO `history` (`idHistory`, `historyCode`, `description`, `status`, `creationDateTime`, `updateDateTime`, `idPatient`) VALUES
	(1, 'BASIOIBNOVW', 'Ya se recupero', 1, '2023-01-23 20:10:56', '2023-01-23 20:14:39', 1),
	(2, 'NOSNGBUQOEWPO', 'No sabemos que tiene', 0, '2023-01-23 20:11:59', '2023-01-23 20:15:59', 1);

-- Dumping structure for table db_breastcancer.image
CREATE TABLE IF NOT EXISTS `image` (
  `idImage` int NOT NULL AUTO_INCREMENT,
  `image` blob NOT NULL,
  `studyType` tinyint NOT NULL,
  `diagnostic` varchar(15) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `updateDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `idHistory` int NOT NULL,
  PRIMARY KEY (`idImage`),
  KEY `idHistory` (`idHistory`),
  CONSTRAINT `idHistory` FOREIGN KEY (`idHistory`) REFERENCES `history` (`idHistory`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_breastcancer.image: ~0 rows (approximately)

-- Dumping structure for table db_breastcancer.nucleoscelulares
CREATE TABLE IF NOT EXISTS `nucleoscelulares` (
  `idNucleosCelulares` int NOT NULL AUTO_INCREMENT,
  `clumbThickness` tinyint NOT NULL,
  `shapeUniformity` tinyint NOT NULL,
  `marginalAdhesion` tinyint NOT NULL,
  `epithelialSize` tinyint NOT NULL,
  `bareNucleoli` tinyint NOT NULL,
  `blandChromatin` tinyint NOT NULL,
  `normalNucleoli` tinyint NOT NULL,
  `mitosis` tinyint NOT NULL,
  `diagnosis` tinyint NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `updateDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `idHistory` int NOT NULL,
  PRIMARY KEY (`idNucleosCelulares`),
  KEY `idHistory_NC` (`idHistory`),
  CONSTRAINT `idHistory_NC` FOREIGN KEY (`idHistory`) REFERENCES `history` (`idHistory`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_breastcancer.nucleoscelulares: ~0 rows (approximately)

-- Dumping structure for table db_breastcancer.patient
CREATE TABLE IF NOT EXISTS `patient` (
  `idPatient` int NOT NULL AUTO_INCREMENT,
  `patientCode` varchar(25) NOT NULL,
  `patientName` varchar(50) NOT NULL,
  `patientFLN` varchar(50) NOT NULL,
  `patientSLN` varchar(50) DEFAULT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `creationDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `idUser` mediumint NOT NULL,
  PRIMARY KEY (`idPatient`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `idUser` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_breastcancer.patient: ~2 rows (approximately)
INSERT INTO `patient` (`idPatient`, `patientCode`, `patientName`, `patientFLN`, `patientSLN`, `status`, `creationDateTime`, `updateDateTime`, `idUser`) VALUES
	(1, '8495300273', 'Dafne', 'Torrico', 'Flores', 1, '2023-01-23 16:36:41', '2023-01-23 16:36:41', 6),
	(2, '7930475792', 'Fercho', 'Guzman', 'Valverde', 0, '2023-01-23 16:42:44', '2023-01-23 19:13:22', 6);

-- Dumping structure for table db_breastcancer.user
CREATE TABLE IF NOT EXISTS `user` (
  `idUser` mediumint NOT NULL AUTO_INCREMENT,
  `userName` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `macAddress` varchar(255) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `creationDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_breastcancer.user: ~4 rows (approximately)
INSERT INTO `user` (`idUser`, `userName`, `password`, `email`, `macAddress`, `status`, `creationDateTime`, `updateDateTime`) VALUES
	(1, 'gvf8922123', 'univalle', 'gvf0026694@est.univalle.edu', 'XJAUSFHOW', 1, '2023-01-23 08:25:11', '2023-01-23 08:25:13'),
	(2, 'fercho', 'password', 'gvf8922123@gmail.com', 'XHISIDFGBOW', 0, '2023-01-23 10:34:39', '2023-01-23 11:25:08'),
	(3, 'dafne', 'univalle', 'univalle@gmail.com', 'XHISIDFGBOW', 1, '2023-01-23 11:32:45', '2023-01-23 11:32:45'),
	(6, 'oscar', 'univalle', 'univalle@gmail.com', 'XHISIDFGBOWARUW', 1, '2023-01-23 16:13:15', '2023-01-23 16:13:15');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
