<?php
    //this file should be inside mamp htdocs
	require 'dbinfo.php';
	
   $firstname = $_POST['firstname'];
   $lastname = $_POST['lastname'];
   $email = $_POST['email'];
   $password = $_POST['password'];

$result =  $db->query("INSERT INTO parentReg (firstname, lastname, email, password) VALUES ( '$firstname', '$lastname','$email','$password')");
  



?>