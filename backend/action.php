<?php

header('Content-type: json/application');
require 'connect.php';

$posts = mysqli_query($connect , "SELECT * FROM `restapi`");
$posts = mysqli_fetch_all($posts);

echo json_encode($posts);
?>