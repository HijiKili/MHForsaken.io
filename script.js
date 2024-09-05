// Add event listeners for each button
document.getElementById("generatePawnButton").addEventListener("click", () => generateText("Pawn", "pawnResult"));
document.getElementById("generateBishopButton").addEventListener("click", () => generateText("Bishop", "bishopResult"));
document.getElementById("generateKnightButton").addEventListener("click", () => generateText("Knight", "knightResult"));
document.getElementById("generateRookButton").addEventListener("click", () => generateText("Rook", "rookResult"));
document.getElementById("generateQueenButton").addEventListener("click", () => generateText("Queen", "queenResult"));
document.getElementById("generateKingButton").addEventListener("click", () => generateText("King", "kingResult"));

// Define the common tables for Tier 1, Tier 2, and Tier 3
const tierTables = {
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
        "Earplug", "Tremor Res", "Windproof", "Wave Guard", "Deep Mobility",
        "Heat Guard", "Cold Proof", "Virus Vaccine", "Endemic Master", "Endemic Prolonger",
        "Master Gatherer", "Evasion", "Evade Distance", "Leap of Faith", "Constitution",
        "Marathon Runner", "Rapid Jump"
    ],
    "Tier 3": [
        "Element Adaptor", "Elderseal Boost", "Bludgeoner", "Weakness Exploit", 
        "Elemental Exploit", "Negative Crit", "Status Chance", "Awakening", 
        "Blight Exploit", "Rapid Up", "Rapid Cooling", "Spare Shot", "Bow Charge+", 
        "Trap Master", "Perception", "Guts", "Handicraft", "Mind's Eye", 
        "Razor Sharp", "Master's Touch", "Protective Polish", "Lighters", 
        "Talon Boost", "Reinforced", "Great Luck", "Knowledge", "Fortuner", 
        "Researcher", "Investigator"
    ]
};

// Define probabilities for each talisman type
const probabilities = {
    "Pawn": {
        "Tier 1": { probability: 95, levels: { "Lv.1": 100, "Lv.2": 0, "Lv.3": 0 }},
        "Tier 2": { probability: 5, levels: { "Lv.1": 100, "Lv.2": 0, "Lv.3": 0 }},
        "Tier 3": { probability: 0, levels: { "Lv.1": 100 }}
    },
    "Bishop": {
        "Tier 1": { probability: 68, levels: { "Lv.1": 95, "Lv.2": 5 }},
        "Tier 2": { probability: 32, levels: { "Lv.1": 100 }},
        "Tier 3": { probability: 0, levels: { "Lv.1": 100 }}
    },
    "Knight": {
        "Tier 1": { probability: 51, levels: { "Lv.1": 83, "Lv.2": 12, "Lv.3": 5 }},
        "Tier 2": { probability: 57, levels: { "Lv.1": 95, "Lv.2": 5 }},
        "Tier 3": { probability: 2, levels: { "Lv.1": 100 }}
    },
    "Rook": {
        "Tier 1": { probability: 20, levels: { "Lv.1": 61, "Lv.2": 27, "Lv.3": 12 }},
        "Tier 2": { probability: 63, levels: { "Lv.1": 83, "Lv.2": 17 }},
        "Tier 3": { probability: 17, levels: { "Lv.1": 100 }}
    },
    "Queen": {
        "Tier 1": { probability: 9, levels: { "Lv.1": 24, "Lv.2": 49, "Lv.3": 27 }},
        "Tier 2": { probability: 49, levels: { "Lv.1": 69, "Lv.2": 27 }},
        "Tier 3": { probability: 42, levels: { "Lv.1": 100 }}
    },
    "King": {
        "Tier 1": { probability: 1, levels: { "Lv.1": 0, "Lv.2": 61, "Lv.3": 39 }},
        "Tier 2": { probability: 43, levels: { "Lv.1": 55, "Lv.2": 45 }},
        "Tier 3": { probability: 56, levels: { "Lv.1": 100 }}
    }
};

function generateText(talismanType, resultElementId) {
    // Get the probabilities for the selected talisman type
    const talismanProbabilities = probabilities[talismanType];

    // Generate a random number between 0 and 100
    let random = Math.random() * 100;
    let cumulativeProbability = 0;

    // Find the selected tier based on the random number
    let selectedTier = null;
    for (const [tier, data] of Object.entries(talismanProbabilities)) {
        cumulativeProbability += data.probability;
        if (random < cumulativeProbability) {
            selectedTier = tier;
            break;
        }
    }

    // Create the result HTML
    let resultHtml = `<h2>${selectedTier}</h2>`;
    
    // Generate a random item from the selected tier's table and add level information
    if (selectedTier) {
        let tierItems = tierTables[selectedTier];
        let itemIndex = Math.floor(Math.random() * tierItems.length);
        let item = tierItems[itemIndex];
        
        // Determine the level based on the tier probabilities
        const levels = talismanProbabilities[selectedTier].levels;
        let levelKeys = Object.keys(levels);
        let levelProbabilities = levelKeys.map(key => levels[key]);
        let totalProbability = levelProbabilities.reduce((a, b) => a + b, 0);
        let levelRandom = Math.random() * totalProbability;
        let cumulativeLevelProbability = 0;
        let selectedLevel = "Lv.1";
        
        for (let i = 0; i < levelKeys.length; i++) {
            cumulativeLevelProbability += levelProbabilities[i];
            if (levelRandom < cumulativeLevelProbability) {
                selectedLevel = levelKeys[i];
                break;
            }
        }

        item += ` - ${selectedLevel}`;
        
        resultHtml += `<p>${item}</p>`;
    }
    
    // Insert the result HTML into the specified placeholder
    document.getElementById(resultElementId).innerHTML = resultHtml;
}
