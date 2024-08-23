<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 Not Found</title>
    <style>
        * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(45deg, #0c3762, #2563a1);
    color: #333;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.error-card {
    background: white;
    padding: 40px 60px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
    width: 100%;
}

.error-card h1 {
    font-size: 6em;
    margin-bottom: 20px;
    color: #1a3581;
}

.error-card p {
    font-size: 1.2em;
    margin-bottom: 30px;
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
    background: #ff8576;
}

    </style>
</head>
<body>
    <div class="container">
        <div class="error-card">
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <a href="https://thestudenthelpline.sg/" class="button">Go to Homepage</a>
        </div>
    </div>
</body>

<!-- <script type="text/javascript">
        setTimeout(function() {
            window.location.href = "index.php";
        }, 2000); // 2000 milliseconds = 2 seconds
    </script> -->
</html>
