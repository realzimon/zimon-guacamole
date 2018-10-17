<?php
  $connection = new MySQLi("localhost",  "root", "", "zimon");
  if ($connection->connect_errno) {
    echo "Failed to connect to MySQL: (" . $connection->connect_errno . ") " . $connection->connect_error;
  }
  ?>
