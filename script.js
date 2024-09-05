// Event listeners for buttons
document.getElementById("generatePawnButton").addEventListener("click", () => genText("Pawn", "pawnResult"));
document.getElementById("generateBishopButton").addEventListener("click", () => genText("Bishop", "bishopResult"));
document.getElementById("generateKnightButton").addEventListener("click", () => genText("Knight", "knightResult"));
document.getElementById("generateRookButton").addEventListener("click", () => genText("Rook", "rookResult"));
document.getElementById("generateQueenButton").addEventListener("click", () => genText("Queen", "queenResult"));
document.getElementById("generateKingButton").addEventListener("click", () => genText("King", "kingResult"));

// Define tables for Tier 1, Tier 2, and Tier 3
const tables = {
    "Tier 1": [
        "Health Boost", "Recovery Speed", "Recovery Up", "Fire Res", "Fire Attack",
        "Poison Res", "Paralysis Res", "Sleep Res", "Stun Res", "Webbed Res",
        "Snow Res", "Bleeding Res", "Blast Res", "Defense Lock", "Resistance Lock",
        "Blast Attack", "Poison Attack", "Paralysis Attack", "Sleep Attack", "Slugger",
        "Stamina Thief", "Water Res", "Thunder Res", "Ice Res", "Dragon Res",
        "Water Attack", "Thunder Attack", "Ice Attack", "Dragon Attack", "Defense Boost",
        "Normal Ammo+", "Pierce Ammo+", "Shrapnel Ammo+", "Spread Ammo+", "Basic Shot+",
        "Power Shot+", "Arc Shot+", "Quick Sheath", "Sheath Sharpen", "Speed Sharpen",
        "Bombardier", "Bomb Master", "Heavy Sieger", "Flinch Free", "Botanist",
        "Geologist", "Entomologist", "Charm Chaser", "Stamina Cap Up", "Stamina Recovery",
        "Endurance Runner", "Cliffhanger", "Transporter", "Intimidator", "Mounting Master",
        "Provoker", "Stealth", "Anti-Theft", "Speed Eating", "Free Meal", "Combine Pro",
        "Item Prolonger", "Wide-Range", "Palico Rally", "Palico Mechanic", "Palico Leader"
    ],
    "Tier 2": [
        "Gourmand", "Blight Res", "Attack Boost", "Expert", "Destroyer",
        "Airborne", "Critical Boost", "Critical Draw", "Repeat Offender", "Critical Element",
        "Critical Status", "Power Charger", "Charge Master", "Power Focus", "Power Prolonger",
        "Agitator", "Elemancy", "Fortify", "Latent Power", "Max Might", "Peak Performance",
        "Potential", "Resentment", "Coalescence", "Special Ammo+", "Artillery",
        "Counter Window", "Edge Guard", "Horn Maestro", "Kinsect Boost", "Load Shells",
        "Offensive Guard", "Rapid Morp", "Reflection Guard", "Reload Sheath", "Dodge Sharpen",
        "Earplug", "Tremor Res", "Windproof", "Wave Guard", "Deep Mobility", "Heat Guard",
        "Cold Proof", "Virus Vaccine", "Endemic Master", "Endemic Prolonger", "Master Gatherer",
        "Evasion", "Evade Distance", "Leap of Faith", "Constitution", "Marathon Runner",
        "Rapid Jump"
    ],
    "Tier 3": [
        "Element Adaptor", "Elderseal Boost", "Bludgeoner", "Weakness Exploit", "Elemental Exploit",
        "Negative Crit", "Status Chance", "Awakening", "Blight Exploit", "Rapid Up", "Rapid Cooling",
        "Spare Shot", "Bow Charge+", "Trap Master", "Perception", "Guts", "Handicraft", "Mind's Eye",
        "Razor Sharp", "Master's Touch", "Protective Polish", "Lighters", "Talon Boost", "Reinforced",
        "Great Luck", "Knowledge", "Fortuner", "Researcher", "Investigator"
    ]
};

// Define the custom probabilities for each talisman
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

// Define the custom probabilities for each talisman
const talismanProbabilities = {
    "Pawn": {
        "Tier 1": { chance: 95, levels: { "1": 100, "2": 0, "3": 0 } },
        "Tier 2": { chance: 5, levels: { "1": 100, "2": 0, "3": 0 } },
        "Tier 3": { chance: 0, levels: { "1": 100 } }
    },
    "Bishop": {
        "Tier 1": { chance: 68, levels: { "1": 95, "2": 5 } },
        "Tier 2": { chance: 32, levels: { "1": 100 } },
        "Tier 3": { chance: 0, levels: { "1": 100 } }
    },
    "Knight": {
        "Tier 1": { chance: 51, levels: { "1": 83, "2": 12, "3": 5 } },
        "Tier 2": { chance: 57, levels: { "1": 95, "2": 5 } },
        "Tier 3": { chance: 2, levels: { "1": 100 } }
    },
    "Rook": {
        "Tier 1": { chance: 20, levels: { "1": 61, "2": 27, "3": 12 } },
        "Tier 2": { chance: 63, levels: { "1": 83, "2": 17 } },
        "Tier 3": { chance: 17, levels: { "1": 100 } }
    },
    "Queen": {
        "Tier 1": { chance: 9, levels: { "1": 24, "2": 49, "3": 27 } },
        "Tier 2": { chance: 49, levels: { "1": 69, "2": 27 } },
        "Tier 3": { chance: 42, levels: { "1": 100 } }
    },
    "King": {
        "Tier 1": { chance: 1, levels: { "1": 0, "2": 61, "3": 39 } },
        "Tier 2": { chance: 43, levels: { "1": 55, "2": 45 } },
        "Tier 3": { chance: 56, levels: { "1": 100 } }
    }
};

// Define bonus skills for Knight, Rook, Queen, and King
const bonusSkills = [
    "Bonus Skill 1", "Bonus Skill 2", "Bonus Skill 3",
    "Bonus Skill 4", "Bonus Skill 5", "Bonus Skill 6", "Bonus Skill 7"
];

// Function to generate text based on the talisman type and show results in the specified result container
function genText(type, resultId) {
    const resultContainer = document.getElementById(resultId);
    const mainSkill = getRandomSkill(type, "Main Skill");
    const bonusSkillsHTML = getBonusSkills(type);

    resultContainer.innerHTML = `
        <h2>Main Skill:</h2>
        <p>${mainSkill}</p>
        ${bonusSkillsHTML}
    `;
}

// Function to get a random skill from the selected tier
function getRandomSkill(type, skillType) {
    const probabilities = talismanProbabilities[type];
    const tier = getRandomTier(probabilities);
    const skill = tables[tier][Math.floor(Math.random() * tables[tier].length)];
    const levelProbabilities = probabilities[tier].levels;
    const level = getRandomLevel(levelProbabilities);

    return `${skill} ${level}`;
}

// Function to get a random tier based on the probabilities
function getRandomTier(probabilities) {
    const random = Math.random() * 100;
    let cumulative = 0;
    for (const [tier, { chance }] of Object.entries(probabilities)) {
        cumulative += chance;
        if (random < cumulative) {
            return tier;
        }
    }
    return "Tier 1"; // Default return value
}

// Function to get a random level based on the level probabilities
function getRandomLevel(levelProbabilities) {
    const random = Math.random() * 100;
    let cumulative = 0;
    for (const [level, chance] of Object.entries(levelProbabilities)) {
        cumulative += chance;
        if (random < cumulative) {
            return level;
        }
    }
    return "1"; // Default return value
}

// Function to get random bonus skills for Knight, Rook, Queen, and King
function getBonusSkills(type) {
    if (["Knight", "Rook", "Queen", "King"].includes(type)) {
        // Randomly select between 1 to 3 bonus skills
        const numSkills = Math.floor(Math.random() * 3) + 1;
        const selectedSkills = [];
        const shuffledSkills = [...bonusSkills].sort(() => 0.5 - Math.random()); // Shuffle bonusSkills

        for (let i = 0; i < numSkills; i++) {
            selectedSkills.push(shuffledSkills[i]);
        }

        return `
            <h3>Bonus:</h3>
            <ul>
                ${selectedSkills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;
    }
    return '';
}


