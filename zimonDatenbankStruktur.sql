-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 30. Nov 2018 um 13:31
-- Server-Version: 10.1.31-MariaDB
-- PHP-Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `zimon`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `quotes`
--

CREATE TABLE `quotes` (
  `id` int(11) NOT NULL,
  `quote` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `quotes`
--

INSERT INTO `quotes` (`id`, `quote`) VALUES
(1, 'Sorry not sorry'),
(3, 'Wenn sich zwei streiten machts der Daniel'),
(4, 'Alles ist lustig, solang es dem Doms passiert'),
(5, 'We need more Zivis!'),
(7, 'Wenns ihr zu lange Quotetexte schreibt, dann bekommen alle Augenkrebs also pls not machen'),
(8, 'Daniel machts'),
(9, 'This is fine.gif'),
(11, 'C ist komplex und C++ ist kompliziert'),
(12, 'Wo ist Philips? Gleich neben Siemens'),
(13, '404 quote not found'),
(14, 'Thomas kauft!'),
(15, 'Schaf bleibt Schaf und wird nicht Kuh'),
(20, 'Hab nur gschaut!'),
(21, 'I schau nur!'),
(22, 'ZiGe: Zivi-Gewerkschaft'),
(23, 'Wenn niemand was sagt, is Peter drin!'),
(24, 'Is eh warm drinnen, warum gemma raus?'),
(25, 'Da hinten liegt ein VGA zu Ethernet Adapter'),
(26, 'Order 66 is active.'),
(28, 'Chrome still in shitty nutshell'),
(32, 'Debian, die Paketnazis'),
(33, 'Mit mir gibt\'s keine Party'),
(35, 'Dominik hat kein Gewissen - Richard'),
(36, 'Hol ma uns a Eis?'),
(37, 'Detektive, jetzt seid ihr gefragt!'),
(38, 'Bundescyberministerium'),
(39, 'ich bin innerlich schon in Pension'),
(41, 'POLIZEI LASSENS UNS BITTE REIN'),
(43, 'BAKS hacken dauert nicht lange'),
(47, 'Was die Eltern nicht tun, muss der Chefzivi machen - Richerd'),
(49, 'Sharing is caring!'),
(50, 'Michael du bist eher so der Flex-Typ'),
(51, 'Das ist ein Zitat, dass ein Zitat darstellen soll, da gerade kein Zitat vorhanden ist.'),
(52, 'Das ist ein Zitat, dass ein Zitat darstellen soll, da gerade kein Zitat vorhanden ist.');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `zivis`
--

CREATE TABLE `zivis` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `spanish` varchar(150) NOT NULL,
  `bild` varchar(500) NOT NULL,
  `farbe` varchar(7) NOT NULL,
  `dead` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `zivis`
--

INSERT INTO `zivis` (`id`, `name`, `spanish`, `bild`, `farbe`, `dead`) VALUES
(1, 'Alexd', '', '', '', 0),
(2, 'Kyro', '', '', '', 0),
(3, 'Hans GÃ¼nter von Anderswo', 'Manuel', 'images/fisch.jpg', '#673ab7', 0);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `quotes`
--
ALTER TABLE `quotes`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `zivis`
--
ALTER TABLE `zivis`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `quotes`
--
ALTER TABLE `quotes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT für Tabelle `zivis`
--
ALTER TABLE `zivis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
