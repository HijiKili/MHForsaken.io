document.getElementById("generateButton").addEventListener("click", generateText);

function generateText() {
    // Define the options with their respective percentages and lists of text
    const options = [
        { 
            text: "Tier 1", 
            probability: 95, 
            items: [
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
            ]
        },
        { 
            text: "Tier 2", 
            probability: 5, 
            items: [
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
            ]
        }
    ];

    // Generate a random number between 0 and 100
    let random = Math.random() * 100;
    let cumulativeProbability = 0;

    // Find the selected option based on random number
    let selectedOption = null;
    for (let i = 0; i < options.length; i++) {
        cumulativeProbability += options[i].probability;
        if (random < cumulativeProbability) {
            selectedOption = options[i];
            break;
        }
    }

    // Create the result HTML
    let resultHtml = `<h2>${selectedOption.text}</h2>`;
    
    // Generate a random item from the selected option and add level information
    if (selectedOption.items) {
        let itemIndex = Math.floor(Math.random() * selectedOption.items.length);
        let item = selectedOption.items[itemIndex];
        
        // Add a random level (1 through 3) if the selected option is "Tier 1"
        if (selectedOption.text === "Tier 1") {
            let level = Math.floor(Math.random() * 3) + 1; // Levels from 1 to 3
            item += ` - Lv.${level}`;
        }
        
        resultHtml += `<p>${item}</p>`;
    }
    
    // Insert the result HTML into the placeholder
    document.getElementById("result").innerHTML = resultHtml;
}
