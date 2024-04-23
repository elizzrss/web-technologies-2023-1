<?php

date_default_timezone_set('Asia/Yekaterinburg');
$title = 'Практика 16';
$h1 = 'Текущее время';

function timeToString() : string {
    $hour = intval(date('H'));
    $minute = intval(date('i'));

    if (($hour >= 5 && $hour <= 20) || $hour == 0) {
        $hourText = ' часов ';
    } elseif (($hour >= 2 && $hour <= 4) || ($hour >= 22 && $hour <= 24)) {
        $hourText = ' часа ';
    } else {
        $hourText = ' час ';
    }

    if ($minute >= 10 && $minute <= 20) {
        $minuteText = ' минут';
    } else {
        $lastDigit = $minute % 10;
        switch ($lastDigit) {
            case 1:
                $minuteText = ' минута';
                break;
            case 2:
            case 3:
            case 4:
                $minuteText = ' минуты';
                break;
            default:
                $minuteText = ' минут';
                break;
        }
    }
    return sprintf("%d%s%d%s", $hour, $hourText, $minute, $minuteText);
}

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title ?></title>
</head>
<body>
	<h1><?php echo $h1 ?></h1>
	<h2><?php print_r(timeToString()) ?></h2>
</body>
</html>