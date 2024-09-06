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

// Function to update bonus result
function updateBonus(talismanType, bonusResultElementId) {
    if (["Knight", "Rook", "Queen", "King"].includes(talismanType)) {
        const bonuses = bonusProbabilities[talismanType];
        let bonus = getOneBonus(bonuses);

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
function getOneBonus(bonusProbabilities) {
    let random = Math.random() * 100;
    let cumulative = 0;
    for (const [bonus, chance] of Object.entries(bonusProbabilities)) {
        cumulative += chance;
        if (random < cumulative) {
            return bonus === "Nothing" ? null : { 
                bonus,
                level: bonus === "Family Bonus" ? getRandomFamilyBonusLevel() : 1
            }; // Level set to 1 by default, except for Family Bonus
        }
    }
    return null;
}

// Helper function to get a random Family Bonus level
function getRandomFamilyBonusLevel() {
    const randomIndex = Math.floor(Math.random() * familyBonusLevels.length);
    return familyBonusLevels[randomIndex];
}
