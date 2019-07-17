<?php
session_start();
$action = array_key_exists('action', $_POST) ? $_POST['action'] : '';

if (!$action) {
    exit;
}

$language = array_key_exists('language', $_POST) ? $_POST['language'] : 'bg';

if ($action == 'check') {
    echo $_SESSION['language'];
} else {
    $_SESSION['language'] = $language;
}
?>
