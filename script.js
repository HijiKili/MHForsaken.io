document.getElementById("generateButton").addEventListener("click", generateText);

function generateText() {
    // Define options and percentages with nested levels for one option
    const options = [
        { text: "Text Option 1", probability: 30, hasLevels: true, levels: [
            "Skill A - Lv 1",
            "Skill A - Lv 2",
            "Skill A - Lv 3"
        ]},
        { text: "Text Option 2", probability: 50, hasLevels: false },
        { text: "Text Option 3", probability: 20, hasLevels: false }
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
    
    // If the selected option has levels, add a random level to the result HTML
    if (selectedOption.hasLevels && selectedOption.levels) {
        // Generate a random index for levels
        let levelIndex = Math.floor(Math.random() * selectedOption.levels.length);
        resultHtml += `<p>${selectedOption.levels[levelIndex]}</p>`;
    }
    
    // Insert the result HTML into the placeholder
    document.getElementById("result").innerHTML = resultHtml;
}
