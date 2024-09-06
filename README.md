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
    <br>
    <!-- Mystery Charm -->
    <h2 style="background-color: #527061; color: white;">Mystery Charm</h2>
    <table>
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
            <td class="result" id="pawnBonus">This talisman has no bonus</td>
        </tr>
        <tr>
            <td>Bishop Talisman</td>
            <td class="result" id="bishopResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell">
                <button id="generateBishopButton">Praise</button>
            </td>
            <td class="result" id="pawnBonus">This talisman has no bonus</td>            
        </tr>
    </table>
    <br>    
    <!-- Shining Charm -->
    <h2 style="background-color: #B7982A; color: black;">Shining Charm</h2>
    <table>
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
                <td class="result" id="knightBonus">Bonus will be displayed here</td>
            </td>
        </tr>
        <tr>
            <td>Rook Talisman</td>
            <td class="result" id="rookResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell">
                <button id="generateRookButton">Praise</button>
                <td class="result" id="rookBonus">Bonus will be displayed here</td>
            </td>
        </tr>
    </table>
    <br>    
    <!-- Timeworn Charm -->
    <h2 style="background-color: #752414; color: white;">Timeworn Charm</h2>
    <table>
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
            <td class="result" id="queenBonus">Bonus will be displayed here</td>
        </tr>
        <tr>
            <td>King Talisman</td>
            <td class="result" id="kingResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell">
                <button id="generateKingButton">Praise</button>
            <td class="result" id="kingBonus">Bonus will be displayed here</td>
            </td>
        </tr>
    </table>

    <script src="MainSkillRandom.js"></script>
    <script src="BonusRandom.js"></script>
</body>
</html>
