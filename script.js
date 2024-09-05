You’re right, let’s ensure the `script.js` script includes all necessary functionality and integrates the bonus skill correctly.

### Complete `script.js`:

```javascript
// Add event listeners for each button
document.getElementById("generatePawnButton").addEventListener("click", () => genText("Pawn", "pawnResult"));
document.getElementById("generateBishopButton").addEventListener("click", () => genText("Bishop", "bishopResult"));
document.getElementById("generateKnightButton").addEventListener("click", () => genText("Knight", "knightResult"));
document.getElementById("generateRookButton").addEventListener("click", () => genText("Rook", "rookResult"));
document.getElementById("generateQueenButton").addEventListener("click", () => genText("Queen", "queenResult"));
document.getElementById("generateKingButton").addEventListener("click", () => genText("King", "kingResult"));

// Define the common tables for Tier 1, Tier 2, and Tier 3
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
const probs = {
    "Pawn": {
        "Tier 1": { prob: 95, levels: { "Lv.1": 100, "Lv.2": 0, "Lv.3": 0 }},
        "Tier 2": { prob: 5, levels: { "Lv.1": 100, "Lv.2": 0, "Lv.3": 0 }},
        "Tier 3": { prob: 0, levels: { "Lv.1": 100 }}
    },
    "Bishop": {
        "Tier 1": { prob: 68, levels: { "Lv.1": 95, "Lv.2": 5 }},
        "Tier 2": { prob: 32, levels: { "Lv.1": 100 }},
        "Tier 3": { prob: 0, levels: { "Lv.1": 100 }}
    },
    "Knight": {
        "Tier 1": { prob: 51, levels: { "Lv.1": 83, "Lv.2": 12, "Lv.3": 5 }},
        "Tier 2": { prob: 57, levels: { "Lv.1": 95, "Lv.2": 5 }},
        "Tier 3": { prob: 2, levels: { "Lv.1": 100 }}
    },
    "Rook": {
        "Tier 1": { prob: 20, levels: { "Lv.1": 61, "Lv.2": 27, "Lv.3": 12 }},
        "Tier 2": { prob: 63, levels: { "Lv.1": 83, "Lv.2": 17 }},
        "Tier 3": { prob: 17, levels: { "Lv.1": 100 }}
    },
    "Queen": {
        "Tier 1": { prob: 9, levels: { "Lv.1": 24, "Lv.2": 49, "Lv.3": 27 }},
        "Tier 2": { prob: 49, levels: { "Lv.1": 69, "Lv.2": 27 }},
        "Tier 3": { prob: 42, levels: { "Lv.1": 100 }}
    },
    "King": {
        "Tier 1": { prob: 1, levels: { "Lv.1": 0, "Lv.2": 61, "Lv.3": 39 }},
        "Tier 2": { prob: 43, levels: { "Lv.1": 55, "Lv.2": 45 }},
        "Tier 3": { prob: 56, levels: { "Lv.1": 100 }}
    }
};

// Bonus skills for Knight, Rook, Queen, and King
const bonus = [
    "Bonus Skill 1", "Bonus Skill 2", "Bonus Skill 3", "Bonus Skill 4", 
    "Bonus Skill 5", "Bonus Skill 6", "Bonus Skill 7"
];

function genText(type, resultId) {
    // Get the probabilities for the selected talisman type
    const p = probs[type];
    
    // Generate a random number between 0 and 100
    let rnd = Math.random() * 100;
    let cumProb = 0;
    
    // Find the selected tier based on the random number
    let tier = null;
    for (const [t, data] of Object.entries(p)) {
        cumProb += data.prob;
        if (rnd < cumProb) {
            tier = t;
            break;
        }
    }
    
    // Create the result HTML
    let resultHtml = `<h2>Main Skill: ${tier}</h2>`;
    
    // Generate a random item from the selected tier's table and add level information
    if (tier) {
        let items = tables[tier];
        let itemIdx = Math.floor(Math.random() * items.length);
        let item = items[itemIdx];
        
        // Determine the level based on the tier probabilities
        const levels = p[tier].levels;
        let levelKeys = Object.keys(levels);
        let levelProbs = levelKeys.map(key => levels[key]);
        let totalProb = levelProbs.reduce((a, b) => a + b, 0);
        let levelRnd = Math.random() * totalProb;
        let cumLevelProb = 0;
        let level = "Lv.1";
        
        for (let i = 0; i < levelKeys.length; i++) {
            cumLevelProb += levelProbs[i];
            if (levelRnd < cumLevelProb) {
                level = levelKeys[i];
                break;
            }
        }
        
        resultHtml += `<p>${item} ${level}</p>`;
        
        // Add bonus skills for Knight, Rook, Queen, and King
        if (type === "Knight" || type === "Rook" || type === "Queen" || type === "King") {
            // Generate a random bonus skill
            let bonusSkill = bonus[Math.floor(Math.random() * bonus.length)];
            resultHtml += `<h3>Bonus Skill: ${bonusSkill}</h3>`;
        }
    }

    // Display the result in the specified element
    document.getElementById(resultId).innerHTML = resultHtml;
}
