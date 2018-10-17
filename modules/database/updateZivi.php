<?php
include_once("connection.php");
/**
* Updates Zivi into database
*/

$name=$_POST["name"];
$image=$_POST["image"];
$ziviSql = "UPDATE zivis SET name=?, bild=?";
$ziviStmnt = $connection->prepare($ziviSql);
$ziviStmnt = $connection->bind_params("ss", $name, $image);
$ziviStmnt->execute();
$ziviStmnt->close();
$connection->close();

?>
