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

// Function to generate text based on talisman type
export function generateText(talismanType, resultElementId) {
    const selectedProbabilities = talismanProbabilities[talismanType];

    // Generate a random number to select the tier
    let random = Math.random() * 100;
    let cumulativeProbability = 0;
    let selectedTier = null;

    for (const [tier, data] of Object.entries(selectedProbabilities || {})) {
        cumulativeProbability += data.chance;
        if (random < cumulativeProbability) {
            selectedTier = tier;
            break;
        }
    }

    // If no tier is selected, stop the function
    if (!selectedTier || !selectedProbabilities[selectedTier]) {
        console.error("No tier or probabilities found");
        return;
    }

    // Get a random skill from the selected tier's table
    let tierItems = tierTables[selectedTier];
    let itemIndex = Math.floor(Math.random() * (tierItems ? tierItems.length : 0));
    let item = tierItems ? tierItems[itemIndex] : "N/A";

    // Determine the level based on probabilities
    let levelProbabilities = selectedProbabilities[selectedTier].levels;
    let level = getRandomLevel(levelProbabilities);

    // Create the result HTML in table format
    let resultHtml = `
        <table>
            <tr>
                <td>${selectedTier}</td>
                <td>${item}</td>
                <td>${level}</td>
            </tr>
        </table>
    `;

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
