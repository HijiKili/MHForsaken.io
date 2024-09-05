document.getElementById("generateButton").addEventListener("click", generateText);

function generateText() {
    const table = document.getElementById("percentageTable");
    const rows = table.getElementsByTagName("tr");

    // Array to hold options and probabilities
    const options = [];

    // Loop through table rows (skip the header)
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        const text = cells[0].textContent;
        const probability = parseFloat(cells[1].textContent);
        options.push({ text: text, probability: probability });
    }

    // Generate a random number between 0 and 100
    let random = Math.random() * 100;
    let cumulativeProbability = 0;

    // Loop through the options and select based on the random number
    for (let i = 0; i < options.length; i++) {
        cumulativeProbability += options[i].probability;
        if (random < cumulativeProbability) {
            // Display only one selected result
            document.getElementById("result").textContent = options[i].text;
            break;
        }
    }
}
