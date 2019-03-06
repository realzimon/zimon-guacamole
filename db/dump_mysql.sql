/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kaffee` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `art` varchar(50) NOT NULL,
  `anzahl` smallint(6) NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
INSERT INTO `kaffee` VALUES (1,'Caffè Crema',171);
INSERT INTO `kaffee` VALUES (2,'Espresso',23);
INSERT INTO `kaffee` VALUES (3,'Doppio',6);
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quotes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
INSERT INTO `quotes` VALUES (1,'Sorry not sorry');
INSERT INTO `quotes` VALUES (3,'Wenn sich zwei streiten machts der Daniel');
INSERT INTO `quotes` VALUES (4,'Alles ist lustig, solang es dem Doms passiert');
INSERT INTO `quotes` VALUES (5,'We need more Zivis!');
INSERT INTO `quotes` VALUES (7,'Wenns ihr zu lange Quotetexte schreibt, dann bekommen alle Augenkrebs also pls not machen');
INSERT INTO `quotes` VALUES (8,'Daniel machts');
INSERT INTO `quotes` VALUES (9,'This is fine.gif');
INSERT INTO `quotes` VALUES (11,'C ist komplex und C++ ist kompliziert');
INSERT INTO `quotes` VALUES (12,'Wo ist Philips? Gleich neben Siemens');
INSERT INTO `quotes` VALUES (13,'404 quote not found');
INSERT INTO `quotes` VALUES (14,'Thomas kauft!');
INSERT INTO `quotes` VALUES (15,'Schaf bleibt Schaf und wird nicht Kuh');
INSERT INTO `quotes` VALUES (20,'Hab nur gschaut!');
INSERT INTO `quotes` VALUES (21,'I schau nur!');
INSERT INTO `quotes` VALUES (22,'ZiGe: Zivi-Gewerkschaft');
INSERT INTO `quotes` VALUES (23,'Wenn niemand was sagt, is Peter drin!');
INSERT INTO `quotes` VALUES (24,'Is eh warm drinnen, warum gemma raus?');
INSERT INTO `quotes` VALUES (25,'Da hinten liegt ein VGA zu Ethernet Adapter');
INSERT INTO `quotes` VALUES (26,'Order 66 is active.');
INSERT INTO `quotes` VALUES (28,'Chrome still in shitty nutshell');
INSERT INTO `quotes` VALUES (32,'Debian, die Paketnazis');
INSERT INTO `quotes` VALUES (33,'Mit mir gibt\'s keine Party');
INSERT INTO `quotes` VALUES (35,'Dominik hat kein Gewissen - Richard');
INSERT INTO `quotes` VALUES (36,'Hol ma uns a Eis?');
INSERT INTO `quotes` VALUES (37,'Detektive, jetzt seid ihr gefragt!');
INSERT INTO `quotes` VALUES (38,'Bundescyberministerium');
INSERT INTO `quotes` VALUES (39,'ich bin innerlich schon in Pension');
INSERT INTO `quotes` VALUES (41,'POLIZEI LASSENS UNS BITTE REIN');
INSERT INTO `quotes` VALUES (43,'BAKS hacken dauert nicht lange');
INSERT INTO `quotes` VALUES (47,'Was die Eltern nicht tun, muss der Chefzivi machen - Richerd');
INSERT INTO `quotes` VALUES (49,'Sharing is caring!');
INSERT INTO `quotes` VALUES (50,'Michael du bist eher so der Flex-Typ');
INSERT INTO `quotes` VALUES (53,'Ich bekomm keinen neuen Monitor, nur einen neuen Bildschirm.');
INSERT INTO `quotes` VALUES (57,'Der Katalysator für Wasser ist H2O.');
INSERT INTO `quotes` VALUES (58,'Nur weil Sie hineingefahren sind, heißt das nicht, dass Sie eine Einfahrtsgenehmigung haben');
INSERT INTO `quotes` VALUES (59,'Ist das da ein 6Taxi?');
INSERT INTO `quotes` VALUES (63,'Eine Länge ist etwas physisches. Ein Kilometerstand nicht.');
INSERT INTO `quotes` VALUES (64,'Du musst einfach warten, bis sich die Falten entfalten.');
INSERT INTO `quotes` VALUES (65,'Bei dem Ding ist einfach zu wenig Loch und zu viel Gitter.');
INSERT INTO `quotes` VALUES (66,'Das Tape ist gerade weggeflogen und befindet sich irgendwo im Schneemann...');
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
INSERT INTO `zivis` VALUES (4,'Alex','Matthew','images/alexander.jpg','#009688',1,NULL);
INSERT INTO `zivis` VALUES (6,'Kyrillus','Matthew','images/kyrillus.jpg','#ffc107',0,'2018-07-01 00:00:00');
INSERT INTO `zivis` VALUES (7,'Max','Thiago','images/max2.jpg','#9c27b0',0,'2018-07-01 00:00:00');
INSERT INTO `zivis` VALUES (8,'Lukas','Lorenzo','images/lukas2.jpg','#ff0090',0,'2018-11-01 00:00:00');
INSERT INTO `zivis` VALUES (9,'Miguel','Ignacio','images/miguel.jpg','#03a9f4',1,'2018-11-01 00:00:00');
INSERT INTO `zivis` VALUES (10,'Dominik','Juan Pablo','images/dominik.jpg','#e91e63',0,'2018-11-01 00:00:00');
INSERT INTO `zivis` VALUES (11,'Hans Günter von Anderswo','Gael','images/fisch.jpg','#00bcd4',1,NULL);
