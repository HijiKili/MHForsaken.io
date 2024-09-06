<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Talisman Generator</title>
    <style>
        table {
            width: 70%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
        button {
            margin-top: 10px;
        }
        .result {
            margin-top: 10px;
            padding: 10px;
            border: 1px solid #ddd;
            vertical-align: top;
        }
        .type {
            width: 20%;
        }
        .result-cell {
            width: 80%;
        }
        .button-cell {
            text-align: center;
        }
        .mystery-charm {
            background-color: #527061;
            color: white;
        }
        .shining-charm {
            background-color: #B7982A;
            color: white;
        }
        .timeworn-charm {
            background-color: #752414;
            color: white;
        }
    </style>
</head>
<body>
    <h1>Talisman Generator</h1>
    <!-- Mystery Charm -->
    <h2>Mystery Charm</h2>
    <table class="mystery-charm">
        <tr>
            <th class="type">Type</th>
            <th class="result-cell">Result</th>
        </tr>
        <tr>
            <td>Pawn Talisman</td>
            <td class="result" id="pawnResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell">
                <button id="generatePawnButton">Praise</button>
            </td>
        </tr>
        <tr>
            <td>Bishop Talisman</td>
            <td class="result" id="bishopResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell">
                <button id="generateBishopButton">Praise</button>
            </td>
        </tr>
    </table>
    <!-- Shining Charm -->
    <h2>Shining Charm</h2>
    <table class="shining-charm">
        <tr>
            <th class="type">Type</th>
            <th class="result-cell">Result</th>
        </tr>
        <tr>
            <td>Knight Talisman</td>
            <td class="result" id="knightResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell">
                <button id="generateKnightButton">Praise</button>
            </td>
        </tr>
        <tr>
            <td>Rook Talisman</td>
            <td class="result" id="rookResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell">
                <button id="generateRookButton">Praise</button>
            </td>
        </tr>
    </table>
    <!-- Timeworn Charm -->
    <h2>Timeworn Charm</h2>
    <table class="timeworn-charm">
        <tr>
            <th class="type">Type</th>
            <th class="result-cell">Result</th>
        </tr>
        <tr>
            <td>Queen Talisman</td>
            <td class="result" id="queenResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell">
                <button id="generateQueenButton">Praise</button>
            </td>
        </tr>
        <tr>
            <td>King Talisman</td>
            <td class="result" id="kingResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell">
                <button id="generateKingButton">Praise</button>
            </td>
        </tr>
    </table>

    <script src="script.js"></script>
</body>
</html>
