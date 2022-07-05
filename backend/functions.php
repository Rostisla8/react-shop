<?php
/*get data in database*/

function getAllData($connect){
    $data = array();
    $posts = mysqli_query($connect , "SELECT * FROM `restapi`");
    while($row = mysqli_fetch_assoc($posts)){ 
        $data[] = $row;
}
echo json_encode($data);
}


function getData($connect , $id){
    $data = array();
    $post = mysqli_query($connect , "SELECT * FROM `restapi` WHERE `category` = '$id'");
    if(mysqli_num_rows($post) == 0){
        http_response_code(404);
        $res = [
            "status" => false,
            "message" => "Data is not found"
        ];
        echo json_encode($res);
    }else{
        
        while($row = mysqli_fetch_assoc($post)){ 
            $data[] = $row;
    }
        echo json_encode($data);
    }

}

/*add data in database*/

function addData($connect , $data){
    $name = $data['name'];
    $description = $data['description'];
    $photo = $data['photo'];
    $price = $data['price'];
    mysqli_query($connect , "INSERT INTO `restapi`(`id`, `name`, `description`, `photo` , `price`) VALUES (null,'$name','$description' , '$photo' , '$price')");
    http_response_code(201);
    $res = [
        "status" => true,
        "data_id" => mysqli_insert_id($connect)
    ];

    echo json_encode($res);
}

/*update data in database*/

function updateData($connect, $id , $data){
    $name = $data['name'];
    $description = $data['description'];
     mysqli_query($connect , "UPDATE `restapi` SET `id`='$id',`name`='$name',`description`='$description' WHERE `id` = '$id'");
     http_response_code(200);
     $res = [
        "status" => true,
        "message" => 'Data is update'
    ];
    echo json_encode($res);
}


function deleteData($connect ,$id){
    mysqli_query($connect , "DELETE FROM `restapi` WHERE `restapi`.`id` = '$id'");
    http_response_code(200);
    $res = [
       "status" => true,
       "message" => 'Data is delete'
   ];
   echo json_encode($res);
}

?>