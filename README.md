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
            table-layout: fixed; /* Ensure table width is fixed */
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
            padding: 10px;
            border: 1px solid #ddd;
            width: 100%; /* Fill available space */
            box-sizing: border-box; /* Include padding and border in element's total width and height */
        }
        .type {
            width: 20%; /* Fixed width for type column */
        }
        .praise-cell {
            text-align: center;
            width: 20%; /* Fixed width for praise button cell */
        }
        .result-cell {
            width: 80%; /* Fill the remaining width */
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
            <th>Result</th>
        </tr>
        <tr>
            <td>Pawn Talisman</td>
            <td class="result" id="pawnResult" rowspan="2">
                <table>
                    <tr>
                        <td class="result-cell" id="pawnResultInner">Result will be displayed here</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="praise-cell" colspan="2">
                <button id="generatePawnButton">Praise</button>
            </td>
        </tr>
        <tr>
            <td>Bishop Talisman</td>
            <td class="result" id="bishopResult" rowspan="2">
                <table>
                    <tr>
                        <td class="result-cell" id="bishopResultInner">Result will be displayed here</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="praise-cell" colspan="2">
                <button id="generateBishopButton">Praise</button>
            </td>
        </tr>
    </table>

    <!-- Shining Charm -->
    <h2>Shining Charm</h2>
    <table>
        <tr>
            <th class="type">Type</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>Knight Talisman</td>
            <td class="result" id="knightResult" rowspan="2">
                <table>
                    <tr>
                        <td class="result-cell" id="knightResultInner">Result will be displayed here</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="praise-cell" colspan="2">
                <button id="generateKnightButton">Praise</button>
            </td>
        </tr>
        <tr>
            <td>Rook Talisman</td>
            <td class="result" id="rookResult" rowspan="2">
                <table>
                    <tr>
                        <td class="result-cell" id="rookResultInner">Result will be displayed here</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="praise-cell" colspan="2">
                <button id="generateRookButton">Praise</button>
            </td>
        </tr>
    </table>

    <!-- Timeworn Charm -->
    <h2>Timeworn Charm</h2>
    <table>
        <tr>
            <th class="type">Type</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>Queen Talisman</td>
            <td class="result" id="queenResult" rowspan="2">
                <table>
                    <tr>
                        <td class="result-cell" id="queenResultInner">Result will be displayed here</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="praise-cell" colspan="2">
                <button id="generateQueenButton">Praise</button>
            </td>
        </tr>
        <tr>
            <td>King Talisman</td>
            <td class="result" id="kingResult" rowspan="2">
                <table>
                    <tr>
                        <td class="result-cell" id="kingResultInner">Result will be displayed here</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="praise-cell" colspan="2">
                <button id="generateKingButton">Praise</button>
            </td>
        </tr>
    </table>

    <script src="script.js"></script>
</body>
</html>
