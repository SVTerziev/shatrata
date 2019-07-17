<?php
$valid = array_key_exists('valid', $_POST) ? true : false;

if (!$valid) {
    exit;
}

require_once('PHPMailerAutoload.php');
date_default_timezone_set('Europe/Sofia');
$mail = new PHPMailer;
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;
$mail->Debugoutput = 'html';
$mail->Host = 'zen.r1servers.com';

// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';
$mail->SMTPAuth = true;
$mail->Username = "";
$mail->Password = "";
$mail->addAddress('placeholder@email.bg', 'Шатра Инфинити');
$mail->isHTML(true);

$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);
$email = array_key_exists('email', $_POST) ? ' - '.htmlspecialchars($_POST['email']) : '';
$mail->setFrom("placeholder@email.bg", $name);

switch($_POST['type']) {
    case 'room':
        $arrivalRaw = htmlspecialchars($_POST['arrival']);
        $arrivalSplit = explode('-', $arrivalRaw);
        $arrival = $arrivalSplit[2].'.'.$arrivalSplit[1].'.'.$arrivalSplit[0];
        $people = htmlspecialchars($_POST['people']);
        $nights = htmlspecialchars($_POST['nights']);
        $roomTypeRaw = htmlspecialchars($_POST['roomType']);
        $additionalRaw = htmlspecialchars($_POST['additional']);

        if (trim($additionalRaw)) {
            $additional = '<br>Допълнителна информация: '. $additionalRaw;
        } else {
            $additional = '';
        }

        switch ($roomTypeRaw) {
            case "double":
                $roomType = "Двойна стая";
                break;
            case "triple":
                $roomType = "Тройна стая";
                break;
            case "apartment":
                $roomType = "Апартамент";
                break;
        }

        $mail->Subject = 'Резервация за стая (' . $name . ')';
        $mail->Body = "<h1>$name</h1>
            <h2>$phone$email</h2>
            Пристига: $arrival<br>
            Брой души: $people<br>
            Нощувки: $nights<br>
            $roomType
            $additional";
        break;
   case 'contact':
        $message = htmlspecialchars($_POST['message']);

        if (trim($phone)) {
            $hasPhone = $phone;
        } else {
            $hasPhone = "";
        }

        $mail->Subject = "Контактна форма ($name)";
        $mail->Body = "<h1>$name</h1>
            <h2>$hasPhone$email</h2>
            $message
        ";
        break;
    case 'restaurant':
        $arrivalRaw = htmlspecialchars($_POST['arrival']);
        $arrivalSplit = explode('-', $arrivalRaw);
        $arrival = $arrivalSplit[2].'.'.$arrivalSplit[1].'.'.$arrivalSplit[0];
        $people = htmlspecialchars($_POST['people']);
        $additionalRaw = htmlspecialchars($_POST['additional']);

        if (trim($additionalRaw)) {
            $additional = '<br>Допълнителна информация: '. $additionalRaw;
        } else {
            $additional = '';
        }

        $mail->Subject = 'Резервация за ресторанта (' . $name . ')';
        $mail->Body = "<h1>$name</h1>
            <h2>$phone$email</h2>
            Дата: $arrival<br>
            Брой души: $people
            $additional";
        break;
}

if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
?>
