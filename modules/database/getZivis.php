<?php
include_once("connection.php");
/**
*Gets random quote from database
*/

  $ziviSql = "SELECT id, name, spanish, bild, farbe FROM zivis WHERE dead=0";
  $ziviStmnt = $connection->prepare($ziviSql);
  $ziviStmnt->execute();
  $ziviStmnt->bind_result($id, $name, $spanish, $bild, $farbe);
  echo"{";
  while($ziviStmnt->fetch()){
    echo"{";
    echo"\"id\": \"".$id."\",";
    echo"\"name\": \"".$name."\",";
    echo"\"spanish\": \"".$spanish."\",";
    echo"\"bild\": \"".$bild."\",";
    echo"\"farbe\": \"".$farbe."\",";
    echo"}";

  }
  echo"}";
  $ziviStmnt->close();
  $connection->close();
?>
