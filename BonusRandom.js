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
document.getElementById("generatePawnButton").addEventListener("click", () => generateBonus("Pawn", "pawnResult"));
document.getElementById("generateBishopButton").addEventListener("click", () => generateBonus("Bishop", "bishopResult"));
document.getElementById("generateKnightButton").addEventListener("click", () => generateBonus("Knight", "knightResult"));
document.getElementById("generateRookButton").addEventListener("click", () => generateBonus("Rook", "rookResult"));
document.getElementById("generateQueenButton").addEventListener("click", () => generateBonus("Queen", "queenResult"));
document.getElementById("generateKingButton").addEventListener("click", () => generateBonus("King", "kingResult"));

// Function to generate bonus based on talisman type
function generateBonus(talismanType, resultElementId) {
    if (!bonusProbabilities[talismanType]) {
        console.error("No bonus probabilities found for", talismanType);
        return;
    }

    // Get bonus probabilities
    const bonuses = bonusProbabilities[talismanType];

    // Determine the bonus based on probabilities
    let bonus = getOneBonus(bonuses);

    // Create the result HTML in table format
    let resultHtml = `
        <table>
            <tr>
                <th>Bonus</th>
                <th>Level</th>
            </tr>
            <tr>
                <td>${bonus ? bonus : "N/A"}</td>
                <td>${bonus ? "Lv.1" : "N/A"}</td>
            </tr>
        </table>`;

    // Insert the result HTML into the specified placeholder
    document.getElementById(resultElementId).innerHTML = resultHtml;
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

