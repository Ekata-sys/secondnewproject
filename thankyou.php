<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include 'head.php' ?>
    <title>Thank You</title>
    <style>
        * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    background: linear-gradient(45deg, #0c3762, #2563a1);
}

#container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.thank-you-card {
    background: white;
    padding: 40px 60px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.thank-you-card h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
}

.thank-you-card p {
    font-size: 1.2em;
    margin-bottom: 30px;
    color: #666;
}

.button {
    display: inline-block;
    padding: 15px 30px;
    background: #1a3581;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s ease;
}

.button:hover {
    background: #ACB6E5;
}

    </style>
</head>
<body>
<?php include 'navbar.php' ?>
    <div id="container">
        <div class="thank-you-card">
            <h1>Thank You!</h1>
            <p>Your submission has been received.</p>
            <a href="https://thestudenthelpline.sg/" class="button">Go to Homepage</a>
        </div>
    </div>
    <?php include 'footer.php' ?>
</body>
</html>
