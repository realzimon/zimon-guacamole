<?php
include_once("connection.php");
/**
*Gets random quote from database
*/

  $quoteSql = "SELECT quote FROM quotes ORDER BY RAND() LIMIT 1";
  $quoteStmnt = $connection->prepare($quoteSql);
  $quoteStmnt->execute();
  $quoteStmnt->bind_result($quote);
  $quoteStmnt->fetch();
  $quoteStmnt->close();
  $connection->close();
  echo $quote;
?>
