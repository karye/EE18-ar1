<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kontaktformulär</title>
    <link rel="stylesheet" href="https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.1/dist/mini-default.min.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="kontainer">
        <h1>Data skickat från formuläret</h1>
        <?php
        foreach ($_POST as $key => $value) {
            echo "Fält <strong>". htmlspecialchars($key) . "</strong> = " . htmlspecialchars($value)."<br>";
        }
        ?>
    </div>
</body>
</html>