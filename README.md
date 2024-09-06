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

    <!-- Buttons for each talisman type -->
    <button id="generatePawnButton">Generate Pawn Talisman</button>
    <div id="pawnResult" class="result"></div>

    <button id="generateBishopButton">Generate Bishop Talisman</button>
    <div id="bishopResult" class="result"></div>

    <button id="generateKnightButton">Generate Knight Talisman</button>
    <div id="knightResult" class="result"></div>

    <button id="generateRookButton">Generate Rook Talisman</button>
    <div id="rookResult" class="result"></div>

    <button id="generateQueenButton">Generate Queen Talisman</button>
    <div id="queenResult" class="result"></div>

    <button id="generateKingButton">Generate King Talisman</button>
    <div id="kingResult" class="result"></div>

    <!-- Link to JavaScript file -->
    <script src="script.js"></script>
</body>
</html>
