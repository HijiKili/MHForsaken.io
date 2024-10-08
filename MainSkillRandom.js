// Define tier tables for each tier
const tierTables = {
    "Tier 1": ["Health Boost", "Recovery Speed", "Recovery Up", "Fire Res", "Fire Attack", "Poison Res", "Paralysis Res", "Sleep Res", "Stun Res", "Webbed Res", "Snow Res", "Bleeding Res", "Blast Res", "Defense Lock", "Resistance Lock", "Blast Attack", "Poison Attack", "Paralysis Attack", "Sleep Attack", "Slugger", "Stamina Thief", "Water Res", "Thunder Res", "Ice Res", "Dragon Res", "Water Attack", "Thunder Attack", "Ice Attack", "Dragon Attack", "Defense Boost", "Normal Ammo+", "Pierce Ammo+", "Shrapnel Ammo+", "Spread Ammo+", "Basic Shot+", "Power Shot+", "Arc Shot+", "Quick Sheath", "Sheath Sharpen", "Speed Sharpen", "Bombardier", "Bomb Master", "Heavy Sieger", "Flinch Free", "Botanist", "Geologist", "Entomologist", "Charm Chaser", "Stamina Cap Up", "Stamina Recovery", "Endurance Runner", "Cliffhanger", "Transporter", "Intimidator", "Mounting Master", "Provoker", "Stealth", "Anti-Theft", "Speed Eating", "Free Meal", "Combine Pro", "Item Prolonger", "Wide-Range", "Palico Rally", "Palico Mechanic", "Palico Leader"],
    "Tier 2": ["Gourmand", "Blight Res", "Attack Boost", "Expert", "Destroyer", "Airborne", "Critical Boost", "Critical Draw", "Repeat Offender", "Critical Element", "Critical Status", "Power Charger", "Charge Master", "Power Focus", "Power Prolonger", "Agitator", "Elemancy", "Fortify", "Latent Power", "Max Might", "Peak Performance", "Potential", "Resentment", "Coalescence", "Special Ammo+", "Artillery", "Counter Window", "Edge Guard", "Horn Maestro", "Kinsect Boost", "Load Shells", "Offensive Guard", "Rapid Morph", "Reflection Guard", "Reload Sheath", "Dodge Sharpen", "Earplug", "Tremor Res", "Windproof", "Wave Guard", "Deep Mobility", "Heat Guard", "Cold Proof", "Virus Vaccine", "Endemic Master", "Endemic Prolonger", "Master Gatherer", "Evasion", "Evade Distance", "Leap of Faith", "Constitution", "Marathon Runner", "Rapid Jump"],
    "Tier 3": ["Element Adaptor", "Elderseal Boost", "Bludgeoner", "Weakness Exploit", "Elemental Exploit", "Negative Crit", "Status Chance", "Awakening", "Blight Exploit", "Rapid Up", "Rapid Cooling", "Spare Shot", "Bow Charge+", "Trap Master", "Perception", "Guts", "Handicraft", "Mind's Eye", "Razor Sharp", "Master's Touch", "Protective Polish", "Lighters", "Talon Boost", "Reinforced", "Great Luck", "Knowledge", "Fortuner", "Researcher", "Investigator"]
};

// Define talisman probabilities for tiers and levels
const talismanProbabilities = {
    "Pawn": {
        "Tier 1": { chance: 90, levels: { "Lv.1": 100, "Lv.2": 0, "Lv.3": 0 } },
        "Tier 2": { chance: 10, levels: { "Lv.1": 100, "Lv.2": 0, "Lv.3": 0 } },
        "Tier 3": { chance: 0, levels: { "Lv.1": 100 } }
    },
    "Bishop": {
        "Tier 1": { chance: 65, levels: { "Lv.1": 95, "Lv.2": 5 } },
        "Tier 2": { chance: 30, levels: { "Lv.1": 100 } },
        "Tier 3": { chance: 5, levels: { "Lv.1": 100 } }
    },
    "Knight": {
        "Tier 1": { chance: 50, levels: { "Lv.1": 75, "Lv.2": 20, "Lv.3": 5 } },
        "Tier 2": { chance: 40, levels: { "Lv.1": 95, "Lv.2": 5 } },
        "Tier 3": { chance: 10, levels: { "Lv.1": 100 } }
    },
    "Rook": {
        "Tier 1": { chance: 20, levels: { "Lv.1": 61, "Lv.2": 27, "Lv.3": 12 } },
        "Tier 2": { chance: 63, levels: { "Lv.1": 83, "Lv.2": 17 } },
        "Tier 3": { chance: 17, levels: { "Lv.1": 100 } }
    },
    "Queen": {
        "Tier 1": { chance: 9, levels: { "Lv.1": 24, "Lv.2": 49, "Lv.3": 27 } },
        "Tier 2": { chance: 49, levels: { "Lv.1": 69, "Lv.2":31 } },
        "Tier 3": { chance: 42, levels: { "Lv.1": 100 } }
    },
    "King": {
        "Tier 1": { chance: 1, levels: { "Lv.1": 0, "Lv.2": 61, "Lv.3": 39 } },
        "Tier 2": { chance: 43, levels: { "Lv.1": 55, "Lv.2": 45 } },
        "Tier 3": { chance: 56, levels: { "Lv.1": 100 } }
    }
};

// Add event listeners for each button
document.getElementById("generatePawnButton").addEventListener("click", () => generateText("Pawn", "pawnResult"));
document.getElementById("generateBishopButton").addEventListener("click", () => generateText("Bishop", "bishopResult"));
document.getElementById("generateKnightButton").addEventListener("click", () => generateText("Knight", "knightResult"));
document.getElementById("generateRookButton").addEventListener("click", () => generateText("Rook", "rookResult"));
document.getElementById("generateQueenButton").addEventListener("click", () => generateText("Queen", "queenResult"));
document.getElementById("generateKingButton").addEventListener("click", () => generateText("King", "kingResult"));

// Function to generate text based on talisman type
function generateText(talismanType, resultElementId) {
    console.log(`Generating text for ${talismanType} with result ${resultElementId}`);
    const selectedProbabilities = talismanProbabilities[talismanType];

    // Generate a random number to select the tier
    let random = Math.random() * 100;
    let cumulativeProbability = 0;
    let selectedTier = null;

    for (const [tier, data] of Object.entries(selectedProbabilities || {})) {
        cumulativeProbability += data.chance;
        if (random < cumulativeProbability) {
            selectedTier = tier;
            break;
        }
    }

    // If no tier is selected, stop the function
    if (!selectedTier || !selectedProbabilities[selectedTier]) {
        console.error("No tier or probabilities found");
        return;
    }

    // Get a random skill from the selected tier's table
    let tierItems = tierTables[selectedTier];
    let itemIndex = Math.floor(Math.random() * (tierItems ? tierItems.length : 0));
    let item = tierItems ? tierItems[itemIndex] : "N/A";

    // Determine the level based on probabilities
    let levelProbabilities = selectedProbabilities[selectedTier].levels;
    let level = getRandomLevel(levelProbabilities);

    // Create the result HTML in table format
    let resultHtml = `
        <table>
            <tr>
                <td>${selectedTier}</td>
                <td>${item}</td>
                <td>${level}</td>
            </tr>
        </table>
    `;

    // Insert the result HTML into the specified placeholder
    document.getElementById(resultElementId).innerHTML = resultHtml;
}

// Helper function to select the random level based on probabilities
function getRandomLevel(levelProbabilities) {
    let random = Math.random() * 100;
    let cumulative = 0;
    for (const [level, chance] of Object.entries(levelProbabilities)) {
        cumulative += chance;
        if (random < cumulative) {
            return level;
        }
    }
    return "Lv.1"; // Default to "Lv.1" if something goes wrong
}
