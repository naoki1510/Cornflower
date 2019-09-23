<?php

include __DIR__ . '/db_config.php';

// DB接続
try {
     $dbh = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASSWORD);
} catch (PDOException $e) {
     echo $e->getMessage();
     exit;
}

spl_autoload_register(function ($class_name) {
    require_once __DIR__ . '/' . str_replace('\\', DIRECTORY_SEPARATOR, $class_name) . '.php';
});