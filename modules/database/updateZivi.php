<?php
include_once("connection.php");
/**
* Updates Zivi into database
*/

$id=$_REQUEST["id"];
$name=$_REQUEST["name"];
$image=$_REQUEST["image"];
$ziviSql = "UPDATE zivis SET name=?, bild=? WHERE id=?";
$ziviStmnt = $connection->prepare($ziviSql);
$ziviStmnt->bind_param("ssi", $name, $image, $id);
$ziviStmnt->execute();
$ziviStmnt->close();
$connection->close();

?>
