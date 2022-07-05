<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-type: json/application');
require 'connect.php';
require 'functions.php';



$method = $_SERVER['REQUEST_METHOD'];


$type = $_GET['q'];
$params = explode('/' , $type);

if($method == 'GET'){
    if($params[0] == 'posts'){
        if(isset($params[1])){
            getData($connect , $params[1]);
        }else{
            getAllData($connect);
        }
        
    } 
}elseif($method == 'POST'){
    if($type == 'posts'){
        addData($connect , $_POST);
    }
}elseif($method = 'PATCH'){
    if($type == 'posts'){
        if(isset($params[1])){
            $data = file_get_contents('php://input');
            $data = json_decode($data , true);
            updateData($connect ,$params[1] , $data);
        }
    }
    
}elseif($method == 'DELETE'){
    if($type == 'posts'){
        if(isset($params[1])){
            deleteData($connect ,$params[1]);
        }
    }
}




?>

