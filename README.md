<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Talisman Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="background">
    <h1>Talisman Generator</h1>
    <br>    
    <!-- Mystery Charm -->
    <h3 style="background-color: #527061; color: white;">Mystery Charm</h3>
    <table>
        <tr>
            <th class="type" style="width: 20%;">Type</th>
            <th class="result-cell">Result</th>
        </tr>
        <tr>
            <td>Pawn Talisman</td>
            <td class="result" id="pawnResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell"><button id="generatePawnButton">Praise</button></td>
            <td>This talisman has no bonus</td>
        </tr>
        <tr>
            <td colspan="2">Uncommonly gives tier 2</td>
        </tr>
        <tr>
            <td>Bishop Talisman</td>
            <td class="result" id="bishopResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell"><button id="generateBishopButton">Praise</button></td>
            <td>This talisman has no bonus</td>
        </tr>
        <tr>
            <td colspan="2">Commonly gives tier 2 sometimes tier 3</td>
        </tr>
    </table>    
    <br>    
    <!-- Shining Charm -->
    <h3 style="background-color: #B7982A; color: black;">Shining Charm</h3>
    <p>Have better chance to get bonus attribut!</p>
    <table>
        <tr>
            <th class="type" style="width: 20%;">Type</th>
            <th class="result-cell">Result</th>
        </tr>
        <tr>
            <td>Knight Talisman</td>
            <td class="result" id="knightResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell"><button id="generateKnightButton">Praise</button></td>
            <td id="knightBonus">Bonus will be displayed here</td>
        </tr>
        <tr>
            <td colspan="2">Rarely gives Lv.3 tier 1 and low decoration slot</td>
        </tr>
        <tr>
            <td>Rook Talisman</td>
            <td class="result" id="rookResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell">
                <button id="generateRookButton">Praise</button></td>
                <td id="rookBonus">Bonus will be displayed here</td>
        </tr>
        <tr>
            <td colspan="2">Uncommonly gives Family Bonus and generous decoration</td>
        </tr>
    </table>    
    <br>    
    <!-- Timeworn Charm -->
    <h3 style="background-color: #752414; color: white;">Timeworn Charm</h3>
    <p>To reduce the crazy RNG from the Second Skill drop rate. You first need to generate the skill from the Shining Charm. The 2nd Skill for the Queen Talisman will copy the existing Knight Talisman, while The King Talisman will copy from the Rook Talisman. You must generate the Shining Charm before obtaining the 2nd skill for the Timeworn Charm!</p>
    <table>
        <tr>
            <th class="type" style="width: 20%;">Type</th>
            <th class="result-cell">Result</th>
        </tr>
        <tr>
            <td>Queen Talisman</td>
            <td class="result" id="queenResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell"><button id="generateQueenButton">Praise</button></td>
            <td id="queenBonus">Bonus will be displayed here</td>
        </tr>
        <tr>
            <td colspan="2">Best chance to have a Family Bonus</td>
        </tr>
        <tr>
            <td>King Talisman</td>
            <td class="result" id="kingResult">Result will be displayed here</td>
        </tr>
        <tr>
            <td class="button-cell"><button id="generateKingButton">Praise</button></td>
            <td id="kingBonus">Bonus will be displayed here</td>
        </tr>
        <tr>
            <td colspan="2">Best chance to have a Second Skill</td>
        </tr>
    </table>    
    <script src="MainSkillRandom.js"></script>
    <script src="BonusRandom.js"></script>
</body>
</html>
