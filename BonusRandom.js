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
        "Second Skill": 0,
        "Family Bonus": 0,
        "Decoration Slot": 20,
        "Nothing": 80
    },
    "Rook": {
        "Second Skill": 0,
        "Family Bonus": 20,
        "Decoration Slot": 60,
        "Nothing": 20
    },
    "Queen": {
        "Second Skill": 20,
        "Family Bonus": 50,
        "Decoration Slot": 20,
        "Nothing": 10
    },
    "King": {
        "Second Skill": 50,
        "Family Bonus": 20,
        "Decoration Slot": 20,
        "Nothing": 10
    }
};

// Define Skill Bonus result mappings
const skillBonusMappings = {
    "Knight": { result: "pawnResult" },
    "Rook": { result: "bishopResult" },
    "Queen": { result: "knightResult" },
    "King": { result: "rookResult" }
};

// Define Slot Bonus level probabilities for each talisman
const slotBonusProbabilities = {
    "Knight": { 1: 65, 2: 35 },
    "Rook": { 1: 55, 2: 40, 3: 5 },
    "Queen": { 1: 40, 2: 55, 3: 15 },
    "King": { 1: 25, 2: 50, 3: 25 }
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
    const { result } = skillBonusMappings[talismanType];
    const skillBonusElement = document.getElementById(result);
    if (skillBonusElement) {
        return skillBonusElement.textContent.trim() || "N/A";
    }
    return "N/A";
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
        const resultElement = document.getElementById(bonusResultElementId);
        if (resultElement) {
            resultElement.innerHTML = bonusHtml;
        } else {
            console.error(`Element with ID ${bonusResultElementId} not found.`);
        }
    } else {
        const resultElement = document.getElementById(bonusResultElementId);
        if (resultElement) {
            resultElement.innerHTML = "N/A";
        }
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
