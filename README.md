<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Talisman Generator</title>
    <style>
        table {
            width: 50%;
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
        }
        .type {
            width: 20%;
        }
        .result-cell {
            width: 80%;
        }
    </style>
</head>
<body>
    <h1>Talisman Generator</h1>

    <!-- Mystery Charm -->
    <h2>Mystery Charm</h2>
    <table>
        <tr>
            <th class="type">Type</th>
            <th class="result-cell">Result</th>
        </tr>
        <tr>
            <td rowspan="2">Pawn Talisman</td>
            <td id="pawnResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td style="text-align: center;"><button id="generatePawnButton">Praise</button></td>
        </tr>
        <tr>
            <td rowspan="2">Bishop Talisman</td>
            <td id="bishopResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td style="text-align: center;"><button id="generateBishopButton">Praise</button></td>
        </tr>
    </table>

    <!-- Shining Charm -->
    <h2>Shining Charm</h2>
    <table>
        <tr>
            <th class="type">Type</th>
            <th class="result-cell">Result</th>
        </tr>
        <tr>
            <td rowspan="2">Knight Talisman</td>
            <td id="knightResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td style="text-align: center;"><button id="generateKnightButton">Praise</button></td>
        </tr>
        <tr>
            <td rowspan="2">Rook Talisman</td>
            <td id="rookResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td style="text-align: center;"><button id="generateRookButton">Praise</button></td>
        </tr>
    </table>

    <!-- Timeworn Charm -->
    <h2>Timeworn Charm</h2>
    <table>
        <tr>
            <th class="type">Type</th>
            <th class="result-cell">Result</th>
        </tr>
        <tr>
            <td rowspan="2">Queen Talisman</td>
            <td id="queenResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td style="text-align: center;"><button id="generateQueenButton">Praise</button></td>
        </tr>
        <tr>
            <td rowspan="2">King Talisman</td>
            <td id="kingResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td style="text-align: center;"><button id="generateKingButton">Praise</button></td>
        </tr>
    </table>

    <script src="script.js"></script>
</body>
</html>
