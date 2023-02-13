<?php
header("Access-Control-Allow-Origin: *");
header("Content-type:text/xml");
$conexion = mysqli_connect('localhost', 'root', '12345', 'world');
$conexion->set_charset("utf-8");
if ($conexion->connect_error) {
    die("Connection failed: " . $conexion->connect_error);
}
$consulta = mysqli_prepare($conexion, "SELECT Name FROM city;");
$consulta->execute();
$result = $consulta->get_result();
$listaCiudades = array();
while ($myrow = $result->fetch_assoc()) {
    array_push($listaCiudades, implode($myrow));
}
$conexion->close();
sort($listaCiudades);

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
    $q = strtolower($q);
    $len = strlen($q);
    foreach ($listaCiudades as $name) {
        if (stristr($q, substr($name, 0, $len))) {
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
        }
    }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "no suggestion" : $hint;
