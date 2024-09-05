const options = [
    { text: "Option A", percentage: 50 },
    { text: "Option B", percentage: 30 },
    { text: "Option C", percentage: 20 }
];

document.getElementById('generateButton').addEventListener('click', function() {
    const result = generateTextBasedOnPercentage(options);
    document.getElementById('result').innerText = result;
});

function generateTextBasedOnPercentage(options) {
    // Calculate the total percentage
    const totalPercentage = options.reduce((total, option) => total + option.percentage, 0);

    // Generate a random number between 0 and 100
    const random = Math.random() * totalPercentage;

    let accumulated = 0;

    // Determine which option to return based on the random number
    for (const option of options) {
        accumulated += option.percentage;
        if (random < accumulated) {
            return option.text;
        }
    }
    return "No option selected"; // Fallback case
}
