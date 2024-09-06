// List of Family Bonus levels
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

// Define Slot Bonus level probabilities for each talisman
const slotBonusProbabilities = {
    "Knight": { 1: 67, 2: 33 },
    "Rook": { 1: 54, 2: 42, 3: 4 },
    "Queen": { 1: 43, 2: 47, 3: 10 },
    "King": { 1: 32, 2: 52, 3: 17 }
};

// Define talisman probabilities for Main Skill (Skill Bonus)
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

// Map of skill bonus sources for each talisman
const skillBonusSources = {
    "Knight": "Pawn",
    "Rook": "Bishop",
    "Queen": "Knight",
    "King": "Rook"
};

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

// Helper function to get one bonus based on probabilities
function getOneBonus(bonusProbabilities, talismanType) {
    let random = Math.random() * 100;
    let cumulative = 0;
    for (const [bonus, chance] of Object.entries(bonusProbabilities)) {
        cumulative += chance;
        if (random < cumulative) {
            // Handle Slot Bonus level selection
            if (bonus === "Slot Bonus") {
                return { bonus, level: getRandomSlotBonusLevel(talismanType) };
            }
            if (bonus === "Skill Bonus") {
                // Use talisman probabilities from the mapped source
                return { bonus, level: getSkillBonusResult(skillBonusSources[talismanType]) };
            }
            return bonus === "Nothing" ? null : { 
                bonus,
                level: bonus === "Family Bonus" ? getRandomFamilyBonusLevel() : 1
            };
        }
    }
    return null;
}

// Function to get a Skill Bonus result using talisman probabilities
function getSkillBonusResult(talismanType) {
    const probabilities = talismanProbabilities[talismanType];
    const selectedTier = selectTier(probabilities);
    const selectedLevel = selectLevel(probabilities[selectedTier].levels);
    return `${selectedTier} - ${selectedLevel}`;
}

// Helper function to select a tier based on probabilities
function selectTier(probabilities) {
    let random = Math.random() * 100;
    let cumulative = 0;
    for (const [tier, data] of Object.entries(probabilities)) {
        cumulative += data.chance;
        if (random < cumulative) {
            return tier;
        }
    }
    return "Tier 1"; // Default to Tier 1 if something goes wrong
}

// Helper function to select a level based on level probabilities
function selectLevel(levels) {
    let random = Math.random() * 100;
    let cumulative = 0;
    for (const [level, chance] of Object.entries(levels)) {
        cumulative += chance;
        if (random < cumulative) {
            return level;
        }
    }
    return "Lv.1"; // Default to Lv.1 if something goes wrong
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
