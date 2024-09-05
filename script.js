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
    "Pawn": [
        { text: "Tier 1", probability: 95, level: true },
        { text: "Tier 2", probability: 5, level: false },
        { text: "Tier 3", probability: 0, level: false }
    ],
    "Bishop": [
        { text: "Tier 1", probability: 68, level: true },
        { text: "Tier 2", probability: 32, level: false },
        { text: "Tier 3", probability: 0, level: false }
    ],
    "Knight": [
        { text: "Tier 1", probability: 51, level: true },
        { text: "Tier 2", probability: 57, level: false },
        { text: "Tier 3", probability: 2, level: false }
    ],
    "Rook": [
        { text: "Tier 1", probability: 20, level: true },
        { text: "Tier 2", probability: 63, level: false },
        { text: "Tier 3", probability: 17, level: false }
    ],
    "Queen": [
        { text: "Tier 1", probability: 9, level: true },
        { text: "Tier 2", probability: 49, level: false },
        { text: "Tier 3", probability: 42, level: false }
    ],
    "King": [
        { text: "Tier 1", probability: 1, level: true },
        { text: "Tier 2", probability: 43, level: false },
        { text: "Tier 3", probability: 56, level: false }
    ]
};

function generateText(talismanType, resultElementId) {
    // Get the probabilities for the selected talisman type
    const selectedProbabilities = probabilities[talismanType];

    // Generate a random number between 0 and 100
    let random = Math.random() * 100;
    let cumulativeProbability = 0;

    // Find the selected tier based on the random number
    let selectedTier = null;
    for (let i = 0; i < selectedProbabilities.length; i++) {
        cumulativeProbability += selectedProbabilities[i].probability;
        if (random < cumulativeProbability) {
            selectedTier = selectedProbabilities[i];
            break;
        }
    }

    // Create the result HTML
    let resultHtml = `<h3>${selectedTier.text}</h3>`;
    
    // Generate a random item from the selected tier's table and add level information
    if (selectedTier) {
        let tierItems = tierTables[selectedTier.text];
        let itemIndex = Math.floor(Math.random() * tierItems.length);
        let item = tierItems[itemIndex];
    
        // Determine the level
        let level = selectedTier.level ? (Math.random() < 0.12 ? 2 : 1) : 1;
    item += ` - ${level}`;

    resultHtml += `<p><strong>Main Skill:</strong> ${item}</p>`;
    }

// Add bonus skills for Knight, Rook, Queen, and King
    if (talismanType === "Knight" || talismanType === "Rook" || talismanType === "Queen" || talismanType === "King") {
        const bonusSkills = ["Bonus 1", "Bonus 2", "Bonus 3", "Bonus 4", "Bonus 5", "Bonus 6", "Bonus 7"];
        let bonusIndex = Math.floor(Math.random() * bonusSkills.length);
        let bonus = bonusSkills[bonusIndex];
        resultHtml += `<p><strong>Bonus Skill:</strong> ${bonus}</p>`;
    }

    
    // Insert the result HTML into the specified placeholder
    document.getElementById(resultElementId).innerHTML = resultHtml;
}
