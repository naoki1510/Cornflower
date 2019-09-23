<?php

ini_set('display_errors', true);
$params = json_decode(file_get_contents('php://input'), true);
$data = [];

for($i = 0; $i < ($params['number'] ?? 20); $i++){
    $uuid = uniqid();
    array_push($data, [
        'title' => "title - $i : $uuid",
        'description' => "description - $i : $uuid",
        'owner' => 'owner',
        'uuid' =>  $uuid
    ]);
}

echo json_encode($data);

file_put_contents('log.txt', file_get_contents('log.txt') . "\n" . @var_export($params, true));
