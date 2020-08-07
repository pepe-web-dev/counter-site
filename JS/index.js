<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="./CSS/styles.css">
</head>

<body>
    <h1>Counter</h1>

    <h3>How the counter works:</h3>
    <p>Enter any number between <strong>10</strong> and <strong>200</strong> and the counter below will count from 0 to
        the number you inputted!</p>

    <div class="container">
        <div class="counter">
            <label for="number-input">Enter a number: </label>
            <input type="text" name="number" id="number-input" placeholder="Number" autocomplete="off" required>
            <button type="submit">Start Counting!</button>
            <p id="counter-number" class="push"></p>
        </div>
    </div>

    <br>
    <a href="https://github.com/pepeworm/counter-site" class="code-btn" target="_blank">Source Code</a>

    <script src="./JS/index.js"></script>
</body>

</html>
