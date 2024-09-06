// Import or ensure access to the generateText function from MainSkillRandom.js
// This assumes generateText is available globally or via import
// e.g., if using modules: import { generateText } from './MainSkillRandom.js';

// List of Family Bonus levels
const familyBonusLevels = [
    "Amphibian",
    "Bird Wyvern",
    "Bonefied",
    "Brute Wyvern",
    "Carapaceon",
    "Ancient",  // Replaced "Elder Dragon" with "Ancient"
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

// Define the mappings for Skill Bonus results
const skillBonusMappings = {
    "Knight": { source: "Pawn", result: "pawnResult" },
    "Rook": { source: "Bishop", result: "bishopResult" },
    "Queen": { source: "Knight", result: "knightResult" },
    "King": { source: "Rook", result: "rookResult" }
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
            if (bonus === "Slot Bonus") {
                return { bonus, level: getRandomSlotBonusLevel(talismanType) };
            }
            if (bonus === "Skill Bonus") {
                return {
                    bonus,
                    level: getSkillBonusLevel(talismanType)
                };
            }
            return bonus === "Nothing" ? null : { 
                bonus,
                level: bonus === "Family Bonus" ? getRandomFamilyBonusLevel() : 1
            };
        }
    }
    return null;
}

// Helper function to get the Skill Bonus level from the appropriate talisman
function getSkillBonusLevel(talismanType) {
    const { source, result } = skillBonusMappings[talismanType];
    return generateText(source, result); // Ensure generateText is accessible and used correctly
}

// Helper function to get a random Family Bonus level
function getRandomFamilyBonusLevel() {
    const randomIndex = Math.floor(Math.random() * familyBonusLevels.length);
    return familyBonusLevels[randomIndex];
}

// Helper function to get a random Slot Bonus level based on talisman type
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
