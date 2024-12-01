<?php
// signup.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Sanitize the input data to prevent code injection
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $password = htmlspecialchars($password);

    // Create or open the users.txt file and save the email and password
    $file = fopen("users.txt", "a");
    if ($file) {
        fwrite($file, "Email: $email, Password: $password\n");
        fclose($file);
        echo "Signup successful!";
    } else {
        echo "Error saving data.";
    }
}
?>
