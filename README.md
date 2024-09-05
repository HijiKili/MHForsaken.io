<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Talisman Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .button-container {
            margin: 20px;
        }
        .button-container button {
            display: block;
            margin-bottom: 5px;
        }
        .result {
            margin-top: 10px;
            font-size: 0.8em; /* Smaller font size */
        }
        .result h2, .result h3 {
            font-size: 0.9em; /* Adjust as needed */
        }
    </style>
</head>
<body>
    <div class="button-container">
        <button id="generatePawnButton">Generate Pawn Talisman</button>
        <div id="pawnResult" class="result"></div>
    </div>
    <div class="button-container">
        <button id="generateBishopButton">Generate Bishop Talisman</button>
        <div id="bishopResult" class="result"></div>
    </div>
    <div class="button-container">
        <button id="generateKnightButton">Generate Knight Talisman</button>
        <div id="knightResult" class="result"></div>
    </div>
    <div class="button-container">
        <button id="generateRookButton">Generate Rook Talisman</button>
        <div id="rookResult" class="result"></div>
    </div>
    <div class="button-container">
        <button id="generateQueenButton">Generate Queen Talisman</button>
        <div id="queenResult" class="result"></div>
    </div>
    <div class="button-container">
        <button id="generateKingButton">Generate King Talisman</button>
        <div id="kingResult" class="result"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
