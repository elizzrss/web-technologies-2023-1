<?php
//---------------------------------ПЕРВОЕ-------------------------------------------------
echo("<h4>Задание 1</h4>");
function evenOddNumbers() {
    $num = 0;
    do {
        if ($num == 0) {
            echo "$num - это ноль.<br>";
        } elseif ($num % 2 == 0) {
            echo "$num - чётное число.<br>";
        } else {
            echo "$num - нечётное число.<br>";
        }
        $num++;
    } while ($num <= 10);
}
evenOddNumbers();

//---------------------------------ВТОРОЕ-------------------------------------------------
echo("<h4>Задание 2</h4>");
$regions = array(
    "Московская область" => array("Москва", "Зеленоград", "Клин"),
    "Ленинградская область" => array("Санкт-Петербург", "Всеволожск", "Павловск", "Кронштадт"),
    "Рязанская область" => array("Рязань", "Скопин", "Рыбное")
);

foreach ($regions as $region => $cities) {
    echo "$region:<br>";
    foreach ($cities as $city) {
        echo "$city, ";
    }
    echo "<br>";
}

//---------------------------------ТРЕТЬЕ-------------------------------------------------
echo("<h4>Задание 3</h4>");
function transliterate($string) {
    $translitMap = array(
        'а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e',
        'ё' => 'yo', 'ж' => 'zh', 'з' => 'z', 'и' => 'i', 'й' => 'j', 'к' => 'k',
        'л' => 'l', 'м' => 'm', 'н' => 'n', 'о' => 'o', 'п' => 'p', 'р' => 'r',
        'с' => 's', 'т' => 't', 'у' => 'u', 'ф' => 'f', 'х' => 'x', 'ц' => 'cz',
        'ч' => 'ch', 'ш' => 'sh', 'щ' => 'shh', 'ъ' => '``', 'ы' => 'y', 'ь' => '`',
        'э' => 'e`', 'ю' => 'yu', 'я' => 'ya'
    );
    $transliterated = '';
    for ($i = 0; $i < mb_strlen($string); $i++) {
        $char = mb_substr($string, $i, 1);
        if (array_key_exists($char, $translitMap)) {
            $transliterated .= $translitMap[$char];
        } else {
            $transliterated .= $char;
        }
    }
    return $transliterated;
}
$string = "привет мир!";
echo transliterate($string);

//---------------------------------ЧЕТВЕРТОЕ-------------------------------------------------
echo("<h4>Задание 4</h4>");

//---------------------------------ШЕСТОЕ-------------------------------------------------
echo("<h4>Задание 6</h4>");
foreach ($regions as $region => $cities) {
    echo "$region:<br>";
    $countCities = false; 
    foreach ($cities as $city) {
        if (mb_substr($city, 0, 1) === "К") {
            echo "$city ";
            $countCities = true;
        }
    }
    if (!$countCities) {
        echo "нет городов на К";
    }
    echo "<br>";
}

?>
