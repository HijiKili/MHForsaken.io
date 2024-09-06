// Define tier tables for each tier
const tierTables = {
    "Tier 1": ["Health Boost", "Recovery Speed", "Recovery Up", "Fire Res", "Fire Attack"],
    "Tier 2": ["Gourmand", "Blight Res", "Attack Boost", "Expert", "Destroyer"],
    "Tier 3": ["Element Adaptor", "Elderseal Boost", "Bludgeoner", "Weakness Exploit"]
};

// Define talisman probabilities for tiers and levels
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

// Define bonus probabilities for each talisman
const bonusProbabilities = {
    "Knight": {
        "Skill Bonus": 3,
        "Family Bonus": 0,
        "Slot Bonus": 11,
        "Nothing": 86
    },
    "Rook": {
        "Skill Bonus": 7,
        "Family Bonus": 4,
        "Slot Bonus": 25,
        "Nothing": 64
    },
    "Queen": {
        "Skill Bonus": 11,
        "Family Bonus": 10,
        "Slot Bonus": 42,
        "Nothing": 37
    },
    "King": {
        "Skill Bonus": 39,
        "Family Bonus": 46,
        "Slot Bonus": 12,
        "Nothing": 3
    }
};

// Add event listeners for each button
document.getElementById("generatePawnButton").addEventListener("click", () => generateText("Pawn", "pawnResult"));
document.getElementById("generateBishopButton").addEventListener("click", () => generateText("Bishop", "bishopResult"));
document.getElementById("generateKnightButton").addEventListener("click", () => generateText("Knight", "knightResult"));
document.getElementById("generateRookButton").addEventListener("click", () => generateText("Rook", "rookResult"));
document.getElementById("generateQueenButton").addEventListener("click", () => generateText("Queen", "queenResult"));
document.getElementById("generateKingButton").addEventListener("click", () => generateText("King", "kingResult"));

// Function to generate text based on talisman type
function generateText(talismanType, resultElementId) {
    const selectedProbabilities = talismanProbabilities[talismanType];
    if (!selectedProbabilities) {
        console.error("Invalid talisman type");
        return;
    }

    // Generate a random number to select the tier
    let random = Math.random() * 100;
    let cumulativeProbability = 0;
    let selectedTier = null;

    for (const [tier, data] of Object.entries(selectedProbabilities)) {
        cumulativeProbability += data.chance;
        if (random < cumulativeProbability) {
            selectedTier = tier;
            break;
        }
    }

    if (!selectedTier || !selectedProbabilities[selectedTier]) {
        console.error("No tier or probabilities found");
        return;
    }

    // Get a random skill from the selected tier's table
    let tierItems = tierTables[selectedTier];
    if (!tierItems) {
        console.error("Invalid tier items");
        return;
    }

    let itemIndex = Math.floor(Math.random() * tierItems.length);
    let item = tierItems[itemIndex] || "N/A";

    // Determine the level based on probabilities
    let levelProbabilities = selectedProbabilities[selectedTier].levels;
    let level = getRandomLevel(levelProbabilities);

    // Create the result HTML in table format
    let resultHtml = `
        <table>
            <tr>
                <th>Tier</th>
                <th>Main Skill</th>
                <th>Level</th>
            </tr>
            <tr>
                <td>${selectedTier}</td>
                <td>${item}</td>
                <td>${level}</td>
            </tr>
            <tr>
                <th>Bonus</th>
                <td colspan="2">`;

    if (["Knight", "Rook", "Queen", "King"].includes(talismanType)) {
        const bonuses = bonusProbabilities[talismanType];
        let bonus = getOneBonus(bonuses);

        resultHtml += bonus ? bonus : "N/A";
    } else {
        resultHtml += "N/A";
    }

    resultHtml += `</td></tr></table>`;

    // Insert the result HTML into the specified placeholder
    document.getElementById(resultElementId).innerHTML = resultHtml;
}

// Helper function to select the random level based on probabilities
function getRandomLevel(levelProbabilities) {
    let random = Math.random() * 100;
    let cumulative = 0;
    for (const [level, chance] of Object.entries(levelProbabilities)) {
        cumulative += chance;
        if (random < cumulative) {
            return level;
        }
    }
    return "Lv.1"; // Default to "Lv.1" if something goes wrong
}

// Helper function to get one bonus based on probabilities
function getOneBonus(bonusProbabilities) {
    let random = Math.random() * 100;
    let cumulative = 0;
    for (const [bonus, chance] of Object.entries(bonusProbabilities)) {
            cumulative += chance;
            if (random < cumulative) {
            return bonus === "Nothing" ? null : bonus;
        }
    }
    return null;
}
