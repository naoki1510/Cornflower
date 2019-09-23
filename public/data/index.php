<?php

use cornflower\Cornflower;
use cornflower\Note;

ini_set('display_errors', true);

include __DIR__ . '/functions.php';

//echo trim($_SERVER["REQUEST_URI"], '/') . PHP_EOL . '<br />';

$cornflower = new Cornflower($dbh);
Note::exists(uniqid(), 'note');

switch (trim($_SERVER["REQUEST_URI"], '/')) {
    case 'data/cardlist':
        $data = $dbh->query('select `uuid` from notes;')->fetchAll(PDO::FETCH_ASSOC);
        foreach ($data as $key => $value) {
            $note = $cornflower->getNote($value['uuid']);
            var_dump($note->getProperty(Note::PROPERTY_OWNER));
            echo '<br />';
            var_dump($note->setProperties([Note::PROPERTY_NAME => 'owner', Note::PROPERTY_DESCRIPTION => 'descriptionnn']));
        }
        break;
    
    default:
        # code...
        break;
}