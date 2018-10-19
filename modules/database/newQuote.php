<?php
include_once("connection.php");
/**
* Inserts Quote into database
*/

$quote="Das ist ein Zitat, dass ein Zitat darstellen soll, da gerade kein Zitat vorhanden ist.";
$quoteSql = "INSERT INTO quotes (quote) VALUES (?)";
$ziviStmnt = $connection->prepare($quoteSql);
$quoteStmnt->bind_param("s", $quote);
$quoteStmnt->execute();
$quoteStmnt->close();
$connection->close();

?>
