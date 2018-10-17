<?php
include_once("connection.php");
/**
* Updates quote into database
*/

$id=$_REQUEST["id"];
$qoute=$_REQUEST["quote"];
$quoteSql = "UPDATE zivis SET quote=? WHERE id=?";
$ziviStmnt = $connection->prepare($quoteSql);
$quoteStmnt->bind_param("si", $quote, $id);
$quoteStmnt->execute();
$quoteStmnt->close();
$connection->close();

?>
