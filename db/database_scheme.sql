-- MySQL dump 10.13  Distrib 8.0.13, for Linux (x86_64)
--
-- Host: localhost    Database: zimon
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `kaffee`
--

DROP TABLE IF EXISTS `kaffee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `kaffee` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `art` varchar(50) NOT NULL,
  `anzahl` smallint(6) NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kaffee`
--

LOCK TABLES `kaffee` WRITE;
/*!40000 ALTER TABLE `kaffee` DISABLE KEYS */;
INSERT INTO `kaffee` VALUES (1,'Caffè Crema',57),(2,'Espresso',20),(3,'Doppio',1);
/*!40000 ALTER TABLE `kaffee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quotes`
--

DROP TABLE IF EXISTS `quotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `quotes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotes`
--

LOCK TABLES `quotes` WRITE;
/*!40000 ALTER TABLE `quotes` DISABLE KEYS */;
INSERT INTO `quotes` VALUES (1,'Sorry not sorry'),(3,'Wenn sich zwei streiten machts der Daniel'),(4,'Alles ist lustig, solang es dem Doms passiert'),(5,'We need more Zivis!'),(7,'Wenns ihr zu lange Quotetexte schreibt, dann bekommen alle Augenkrebs also pls not machen'),(8,'Daniel machts'),(9,'This is fine.gif'),(11,'C ist komplex und C++ ist kompliziert'),(12,'Wo ist Philips? Gleich neben Siemens'),(13,'404 quote not found'),(14,'Thomas kauft!'),(15,'Schaf bleibt Schaf und wird nicht Kuh'),(20,'Hab nur gschaut!'),(21,'I schau nur!'),(22,'ZiGe: Zivi-Gewerkschaft'),(23,'Wenn niemand was sagt, is Peter drin!'),(24,'Is eh warm drinnen, warum gemma raus?'),(25,'Da hinten liegt ein VGA zu Ethernet Adapter'),(26,'Order 66 is active.'),(28,'Chrome still in shitty nutshell'),(32,'Debian, die Paketnazis'),(33,'Mit mir gibt\'s keine Party'),(35,'Dominik hat kein Gewissen - Richard'),(36,'Hol ma uns a Eis?'),(37,'Detektive, jetzt seid ihr gefragt!'),(38,'Bundescyberministerium'),(39,'ich bin innerlich schon in Pension'),(41,'POLIZEI LASSENS UNS BITTE REIN'),(43,'BAKS hacken dauert nicht lange'),(47,'Was die Eltern nicht tun, muss der Chefzivi machen - Richerd'),(49,'Sharing is caring!'),(50,'Michael du bist eher so der Flex-Typ'),(53,'Ich bekomm keinen neuen Monitor, nur einen neuen Bildschirm.'),(57,'Der Katalysator für Wasser ist H2O.'),(58,'Nur weil Sie hineingefahren sind, heißt das nicht, dass Sie eine Einfahrtsgenehmigung haben'),(59,'Ist das da ein 6Taxi?'),(63,'Eine Länge ist etwas physisches. Ein Kilometerstand nicht.'),(64,'Du musst einfach warten, bis sich die Falten entfalten.'),(65,'Bei dem Ding ist einfach zu wenig Loch und zu viel Gitter.'),(66,'Das Tape ist gerade weggeflogen und befindet sich irgendwo im Schneemann...');
/*!40000 ALTER TABLE `quotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zivis`
--

DROP TABLE IF EXISTS `zivis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `zivis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `spanish` varchar(150) NOT NULL,
  `bild` varchar(500) NOT NULL,
  `farbe` varchar(7) NOT NULL,
  `dead` tinyint(1) NOT NULL DEFAULT '0',
  `antritt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zivis`
--

LOCK TABLES `zivis` WRITE;
/*!40000 ALTER TABLE `zivis` DISABLE KEYS */;
INSERT INTO `zivis` VALUES (4,'Alex','Matthew','images/alexander.jpg','#009688',1,NULL),(6,'Kyrillus','Matthew','images/kyrillus.jpg','#ffc107',0,'2018-07-01 00:00:00'),(7,'Max','Thiago','images/max2.jpg','#9c27b0',0,'2018-07-01 00:00:00'),(8,'Lukas','Lorenzo','images/lukas2.jpg','#ff0090',0,'2018-11-01 00:00:00'),(9,'Miguel','Ignacio','images/miguel.jpg','#03a9f4',0,'2018-11-01 00:00:00'),(10,'Dominik','Juan Pablo','images/dominik.jpg','#e91e63',0,'2018-11-01 00:00:00'),(11,'Hans Günter von Anderswo','Gael','images/fisch.jpg','#00bcd4',1,NULL);
/*!40000 ALTER TABLE `zivis` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-07 10:45:05
