<?php
$host = "localhost";
$user = "jesus";
$pass = "12345";
$dbname = "reservas";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>