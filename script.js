document.getElementById("generateButton").addEventListener("click", generateText);

function generateText() {
    // Define options and percentages with nested table for one option
    const options = [
        { text: "Text Option 1", probability: 30, hasNestedTable: true, nestedTable: [
            { detail: "Detail 1.1", value: "Value 1.1" },
            { detail: "Detail 1.2", value: "Value 1.2" }
        ]},
        { text: "Text Option 2", probability: 50, hasNestedTable: false },
        { text: "Text Option 3", probability: 20, hasNestedTable: false }
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
    
    // If the selected option has a nested table, add it to the result HTML
    if (selectedOption.hasNestedTable && selectedOption.nestedTable) {
        resultHtml += `<table border="1"><tr><th>Detail</th><th>Value</th></tr>`;
        selectedOption.nestedTable.forEach(row => {
            resultHtml += `<tr><td>${row.detail}</td><td>${row.value}</td></tr>`;
        });
        resultHtml += `</table>`;
    }
    
    // Insert the result HTML into the placeholder
    document.getElementById("result").innerHTML = resultHtml;
}
