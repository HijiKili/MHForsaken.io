// Define Family Bonus levels
const familyBonusLevels = [
    "Amphibian",
    "Bird Wyvern",
    "Bonefied",
    "Brute Wyvern",
    "Carapaceon",
    "Ancient",
    "Fanged Beast",
    "Flying Wyvern",
    "Orenite",
    "Piscine Wyvern",
    "Snake Wyvern",
    "Temnoceran",
    "Wilderness"
];
// Define bonus probabilities for each talisman
const bonusProbabilities = {
    "Knight": {
        "Second Skill": 9,
        "Family Bonus": 0,
        "Decoration Slot": 11,
        "Nothing": 80
    },
    "Rook": {
        "Second Skill": 11,
        "Family Bonus": 4,
        "Decoration Slot": 25,
        "Nothing": 60
    },
    "Queen": {
        "Second Skill": 19,
        "Family Bonus": 10,
        "Decoration Slot": 42,
        "Nothing": 29
    },
    "King": {
        "Second Skill": 47,
        "Family Bonus": 41,
        "Decoration Slot": 12,
        "Nothing": 0
    }
};

// Define Skill Bonus result mappings
const skillBonusMappings = {
    "Knight": { source: "Pawn", result: "pawnResult" },
    "Rook": { source: "Bishop", result: "bishopResult" },
    "Queen": { source: "Knight", result: "knightResult" },
    "King": { source: "Rook", result: "rookResult" }
};

// Helper function to get one bonus based on probabilities
function getOneBonus(bonusProbabilities, talismanType) {
    let random = Math.random() * 100;
    let cumulative = 0;
    for (const [bonus, chance] of Object.entries(bonusProbabilities)) {
        cumulative += chance;
        if (random < cumulative) {
            if (bonus === "Decoration Slot") {
                return { bonus, level: getRandomSlotBonusLevel(talismanType) };
            }
            if (bonus === "Second Skill") {
                return {
                    bonus,
                    level: getSkillBonusLevel(talismanType)
                };
            }
            if (bonus === "Family Bonus") {
                return { bonus, level: getRandomFamilyBonusLevel() };
            }
            return bonus === "Nothing" ? null : { bonus, level: 1 };
        }
    }
    return null;
}

// Helper function to get the Second Skill level from the appropriate talisman
function getSkillBonusLevel(talismanType) {
    const { source, result } = skillBonusMappings[talismanType];
    let skillBonusLevel = document.getElementById(result).textContent; // Get the result from the corresponding element
    return skillBonusLevel || "N/A";
}

// Helper function to get a random Family Bonus level
function getRandomFamilyBonusLevel() {
    const randomIndex = Math.floor(Math.random() * familyBonusLevels.length);
    return familyBonusLevels[randomIndex];
}

// Helper function to get a random Decoration Slot level based on talisman type
function getRandomSlotBonusLevel(talismanType) {
    const slotLevels = slotBonusProbabilities[talismanType];
    let random = Math.random() * 100;
    let cumulative = 0;
    for (const [level, chance] of Object.entries(slotLevels)) {
        cumulative += chance;
        if (random < cumulative) {
            return level;
        }
    }
    return 1; // Default to 1 if something goes wrong
}

// Function to update bonus result
function updateBonus(talismanType, bonusResultElementId) {
    if (["Knight", "Rook", "Queen", "King"].includes(talismanType)) {
        const bonuses = bonusProbabilities[talismanType];
        let bonus = getOneBonus(bonuses, talismanType);

        let bonusHtml = `
            <table class="bonus-table">
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
});
