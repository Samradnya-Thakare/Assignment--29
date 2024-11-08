// script.js
function toUpperCase() {
    const textInput = document.getElementById("textInput").value;
    document.getElementById("resultText").innerText = textInput.toUpperCase();
}

function toLowerCase() {
    const textInput = document.getElementById("textInput").value;
    document.getElementById("resultText").innerText = textInput.toLowerCase();
}

function countWords() {
    const textInput = document.getElementById("textInput").value.trim();
    const wordCount = textInput ? textInput.split(/\s+/).length : 0;
    document.getElementById("resultText").innerText = `Word Count: ${wordCount}`;
}

function reverseText() {
    const textInput = document.getElementById("textInput").value;
    document.getElementById("resultText").innerText = textInput.split('').reverse().join('');
}

function clearText() {
    document.getElementById("textInput").value = '';
    document.getElementById("resultText").innerText = 'Your result will appear here.';
}
