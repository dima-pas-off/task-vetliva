<?


if($_SERVER["REQUEST_METHOD"] === "POST") {

    $fullName = htmlspecialchars($_POST["fullName"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phoneNumber"]);
    $typeRoom = htmlspecialchars($_POST["roomType"]);



    $arrayPrices = ["economy" => ["Экономный", 250], "standart" => ["Стандартный", 500], "lux" => ["Люкс", 1000]];


    echo json_encode(
        [
            "fullName" => $fullName, 
            "email" => $email, 
            "phone" => $phone,
            "typeRoom" => $arrayPrices[$typeRoom][0],
            "price" => $arrayPrices[$typeRoom][1]]);
}