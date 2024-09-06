<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Talisman Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Talisman Generator</h1>

    <!-- Mystery Charm -->
    <h2>Mystery Charm</h2>
    <div id="mysteryCharm">
        <table>
            <tr>
                <th class="type">Type</th>
                <th class="result-cell">Result</th>
            </tr>
            <tr>
                <td>Pawn Talisman</td>
                <td class="result" id="pawnResult" rowspan="2">Result will be displayed here</td>
            </tr>
            <tr>
                <td class="button-cell">
                    <button id="generatePawnButton">Praise</button>
                </td>
            </tr>
            <tr>
                <td>Bishop Talisman</td>
                <td class="result" id="bishopResult" rowspan="2">Result will be displayed here</td>
            </tr>
            <tr>
                <td class="button-cell">
                    <button id="generateBishopButton">Praise</button>
                </td>
            </tr>
        </table>
    </div>

    <!-- Shining Charm -->
    <h2>Shining Charm</h2>
    <div id="shiningCharm">
        <table>
            <tr>
                <th class="type">Type</th>
                <th class="result-cell">Result</th>
            </tr>
            <tr>
                <td>Knight Talisman</td>
                <td class="result" id="knightResult" rowspan="2">Result will be displayed here</td>
            </tr>
            <tr>
                <td class="button-cell">
                    <button id="generateKnightButton">Praise</button>
                </td>
            </tr>
            <tr>
                <td>Rook Talisman</td>
                <td class="result" id="rookResult" rowspan="2">Result will be displayed here</td>
            </tr>
            <tr>
                <td class="button-cell">
                    <button id="generateRookButton">Praise</button>
                </td>
            </tr>
        </table>
    </div>

    <!-- Timeworn Charm -->
    <h2>Timeworn Charm</h2>
    <div id="timewornCharm">
        <table>
            <tr>
                <th class="type">Type</th>
                <th class="result-cell">Result</th>
            </tr>
            <tr>
                <td>Queen Talisman</td>
                <td class="result" id="queenResult" rowspan="2">Result will be displayed here</td>
            </tr>
            <tr>
                <td class="button-cell">
                    <button id="generateQueenButton">Praise</button>
                </td>
            </tr>
            <tr>
                <td>King Talisman</td>
                <td class="result" id="kingResult" rowspan="2">Result will be displayed here</td>
            </tr>
            <tr>
                <td class="button-cell">
                    <button id="generateKingButton">Praise</button>
                </td>
            </tr>
        </table>
    </div>

    <!-- Load the JavaScript files -->
    <script src="MainSkillRandom.js"></script>
    <script src="BonusRandom.js"></script>
</body>
</html>
