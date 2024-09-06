<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Talisman Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Talisman Generator</h1>

    <!-- Mystery Charm -->
    <h2 class="mystery-charm">Mystery Charm</h2>
    <table class="mystery-charm">
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

    <!-- Shining Charm -->
    <h2 class="shining-charm">Shining Charm</h2>
    <table class="shining-charm">
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

    <!-- Timeworn Charm -->
    <h2 class="timeworn-charm">Timeworn Charm</h2>
    <table class="timeworn-charm">
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

    <script src="MainSkillRandom.js"></script>
    <script src="BonusRandom.js"></script>
</body>
</html>
