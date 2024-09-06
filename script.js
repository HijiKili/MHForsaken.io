const talismanProbabilities = {
    "Pawn": {
        "Tier 1": { chance: 95, levels: { "Lv.1": 100, "Lv.2": 0, "Lv.3": 0 } },
        "Tier 2": { chance: 5, levels: { "Lv.1": 100, "Lv.2": 0, "Lv.3": 0 } },
        "Tier 3": { chance: 0, levels: { "Lv.1": 100 } }
    },
    "Bishop": {
        "Tier 1": { chance: 68, levels: { "Lv.1": 95, "Lv.2": 5 } },
        "Tier 2": { chance: 32, levels: { "Lv.1": 100 } },
        "Tier 3": { chance: 0, levels: { "Lv.1": 100 } }
    },
    "Knight": {
        "Tier 1": { chance: 51, levels: { "Lv.1": 83, "Lv.2": 12, "Lv.3": 5 } },
        "Tier 2": { chance: 57, levels: { "Lv.1": 95, "Lv.2": 5 } },
        "Tier 3": { chance: 2, levels: { "Lv.1": 100 } }
    },
    "Rook": {
        "Tier 1": { chance: 20, levels: { "Lv.1": 61, "Lv.2": 27, "Lv.3": 12 } },
        "Tier 2": { chance: 63, levels: { "Lv.1": 83, "Lv.2": 17 } },
        "Tier 3": { chance: 17, levels: { "Lv.1": 100 } }
    },
    "Queen": {
        "Tier 1": { chance: 9, levels: { "Lv.1": 24, "Lv.2": 49, "Lv.3": 27 } },
        "Tier 2": { chance: 49, levels: { "Lv.1": 69, "Lv.2": 27 } },
        "Tier 3": { chance: 42, levels: { "Lv.1": 100 } }
    },
    "King": {
        "Tier 1": { chance: 1, levels: { "Lv.1": 0, "Lv.2": 61, "Lv.3": 39 } },
        "Tier 2": { chance: 43, levels: { "Lv.1": 55, "Lv.2": 45 } },
        "Tier 3": { chance: 56, levels: { "Lv.1": 100 } }
    }
};

const bonusProbabilities = {
    "Knight": { "Skill Bonus": 3, "Family Bonus": 0, "Slot Bonus": 11, "Nothing": 86 },
    "Rook": { "Skill Bonus": 7, "Family Bonus": 4, "Slot Bonus": 25, "Nothing": 64 },
    "Queen": { "Skill Bonus": 11, "Family Bonus": 10, "Slot Bonus": 42, "Nothing": 37 },
    "King": { "Skill Bonus": 39, "Family Bonus": 46, "Slot Bonus": 12, "Nothing": 3 }
};

const tierTables = {
    "Tier 1": ["Recovery Speed", "Attack Power", "Defense"],
    "Tier 2": ["Speed", "Magic Power", "Stamina"],
    "Tier 3": ["Critical Hit", "Luck", "Evasion"]
};

function generateText(talismanType) {
    const probabilities = talismanProbabilities[talismanType];
    const bonusProb = bonusProbabilities[talismanType];

    // Determine tier
    const tierKeys = Object.keys(probabilities);
    const tier = tierKeys[Math.floor(Math.random() * tierKeys.length)];
    const tierData = probabilities[tier];

    // Determine level
    let level = "N/A";
    if (tierData.levels) {
        const levels = Object.keys(tierData.levels);
        level = levels[Math.floor(Math.random() * levels.length)];
    }

    // Determine main skill
    const tierItems = tierTables[tier];
    const itemIndex = Math.floor(Math.random() * tierItems.length);
    const item = tierItems[itemIndex];

    // Determine bonus
    let bonus = "N/A";
    const bonusChance = Math.random() * 100;
    let cumulative = 0;
    for (const [bonusType, chance] of Object.entries(bonusProb)) {
        cumulative += chance;
        if (bonusChance <= cumulative) {
            if (bonusType !== "Nothing") {
                bonus = bonusType;
            }
            break;
        }
    }

    // Format result
    const resultHtml = `
        <table>
            <tr>
                <th>Tier</th>
                <td>${tier}</td>
            </tr>
            <tr>
                <th>Main Skill</th>
                <td>${item}</td>
            </tr>
            <tr>
                <th>Level</th>
                <td>${level}</td>
            </tr>
            <tr>
                <th>Bonus</th>
                <td>${bonus}</td>
            </tr>
        </table>
    `;
    return resultHtml;
}

document.getElementById("generatePawnButton").addEventListener("click", function() {
    document.getElementById("pawnResult").innerHTML = generateText("Pawn");
});

document.getElementById("generateBishopButton").addEventListener("click", function() {
    document.getElementById("bishopResult").innerHTML = generateText("Bishop");
});

document.getElementById("generateKnightButton").addEventListener("click", function() {
    document.getElementById("knightResult").innerHTML = generateText("Knight");
});

document.getElementById("generateRookButton").addEventListener("click", function() {
    document.getElementById("rookResult").innerHTML = generateText("Rook");
});

document.getElementById("generateQueenButton").addEventListener("click", function() {
    document.getElementById("queenResult").innerHTML = generateText("Queen");
});

document.getElementById("generateKingButton").addEventListener("click", function() {
    document.getElementById("kingResult").innerHTML = generateText("King");
});
