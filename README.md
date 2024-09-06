<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Talisman Generator</title>
    <style>
        table {
            width: 100%;
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
        /* Fixed column widths based on percentages */
        .result table {
            table-layout: fixed;
        }
        .result th, .result td {
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .result td:first-child {
            width: 10%; /* Talisman Type */
        }
        .result td:nth-child(2) {
            width: 30%; /* Generate */
        }
        .result td:last-child {
            width: 60%; /* Result */
        }
    </style>
</head>
<body>
    <h1>Talisman Generator</h1>

    <!-- Mystery Charm -->
    <h2>Mystery Charm</h2>
    <table>
        <tr>
            <th>Talisman Type</th>
            <th>Generate</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>Pawn Talisman</td>
            <td><button id="generatePawnButton">Generate Pawn Talisman</button></td>
            <td class="result" id="pawnResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td>Bishop Talisman</td>
            <td><button id="generateBishopButton">Generate Bishop Talisman</button></td>
            <td class="result" id="bishopResult">Result will be displayed here</td>
        </tr>
    </table>

    <!-- Shining Charm -->
    <h2>Shining Charm</h2>
    <table>
        <tr>
            <th>Talisman Type</th>
            <th>Generate</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>Knight Talisman</td>
            <td><button id="generateKnightButton">Generate Knight Talisman</button></td>
            <td class="result" id="knightResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td>Rook Talisman</td>
            <td><button id="generateRookButton">Generate Rook Talisman</button></td>
            <td class="result" id="rookResult">Result will be displayed here</td>
        </tr>
    </table>

    <!-- Timeworn Charm -->
    <h2>Timeworn Charm</h2>
    <table>
        <tr>
            <th>Talisman Type</th>
            <th>Generate</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>Queen Talisman</td>
            <td><button id="generateQueenButton">Generate Queen Talisman</button></td>
            <td class="result" id="queenResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td>King Talisman</td>
            <td><button id="generateKingButton">Generate King Talisman</button></td>
            <td class="result" id="kingResult">Result will be displayed here</td>
        </tr>
    </table>

    <script src="script.js"></script>
</body>
</html>
