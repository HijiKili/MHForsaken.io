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

// Function to update bonus result
function updateBonus(talismanType, bonusResultElementId) {
    if (["Knight", "Rook", "Queen", "King"].includes(talismanType)) {
        const bonuses = bonusProbabilities[talismanType];
        let bonus = getOneBonus(bonuses);

        let bonusHtml = `
            <table class="bonus-table">
                <tr>
                    <th>Bonus</th>
                    <th>Level</th>
                </tr>
                <tr>
                    <td>${bonus ? bonus.bonus : "N/A"}</td>
                    <td>${bonus ? bonus.level : "N/A"}</td>
                </tr>
            </table>
        `;

        // Insert the bonus result HTML into the specified placeholder
        document.getElementById(bonusResultElementId).innerHTML = bonusHtml;
    } else {
        document.getElementById(bonusResultElementId).innerHTML = "N/A";
    }
}

// Helper function to get one bonus based on probabilities
function getOneBonus(bonusProbabilities) {
    let random = Math.random() * 100;
    let cumulative = 0;
    for (const [bonus, chance] of Object.entries(bonusProbabilities)) {
        cumulative += chance;
        if (random < cumulative) {
            return bonus === "Nothing" ? null : { bonus, level: 1 }; // Level set to 1 by default
        }
    }
    return null;
}

// Event listeners for each button
document.getElementById('generateKnightButton').addEventListener('click', function() {
    updateBonus('Knight', 'knightBonus');
});

document.getElementById('generateRookButton').addEventListener('click', function() {
    updateBonus('Rook', 'rookBonus');
});

document.getElementById('generateQueenButton').addEventListener('click', function() {
    updateBonus('Queen', 'queenBonus');
});

document.getElementById('generateKingButton').addEventListener('click', function() {
    updateBonus('King', 'kingBonus');
});
