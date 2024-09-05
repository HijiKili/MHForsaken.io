<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Talisman Generator</title>
    <link rel="stylesheet" href="styles.css"> <!-- Optional for styling -->
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        button {
            display: block;
            margin: 10px 0;
        }
        .result {
            margin-top: 10px;
            font-size: 14px; /* Smaller font size */
        }
    </style>
</head>
<body>
    <h1>Talisman Generator</h1>
    <button id="pawnButton">Pawn Talisman</button>
    <div id="pawnResult" class="result"></div>

    <button id="bishopButton">Bishop Talisman</button>
    <div id="bishopResult" class="result"></div>

    <button id="knightButton">Knight Talisman</button>
    <div id="knightResult" class="result"></div>

    <button id="rookButton">Rook Talisman</button>
    <div id="rookResult" class="result"></div>

    <button id="queenButton">Queen Talisman</button>
    <div id="queenResult" class="result"></div>

    <button id="kingButton">King Talisman</button>
    <div id="kingResult" class="result"></div>

    <script src="script.js"></script>
</body>
</html>
