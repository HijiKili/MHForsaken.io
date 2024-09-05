document.getElementById('generateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const result = generateText(inputText);
    document.getElementById('result').innerText = result;
});

function generateText(input) {
    // Simple text generation logic; replace with your own algorithm
    return input.split('').reverse().join('');
}
