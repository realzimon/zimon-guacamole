<?php
include_once("connection.php");
/**
*Gets random quote from database
*/

  $quoteSql = "SELECT id, quote FROM quotes";
  $quoteStmnt = $connection->prepare($quoteSql);
  $quoteStmnt->execute();
  $quoteStmnt->bind_result($id, $quote);
  echo"[";
  while($quoteStmnt->fetch()){
    echo"{";
    echo "\"id\":\""+$id+"\",";
    echo "\"quote\":\""+$quote+"\"";
    echo"}";
  }
  echo"]";
  $quoteStmnt->close();
  $connection->close();

?>
