
function convertString() {
const inputElement = document.getElementById('inputString');
const resultElement = document.getElementById('result');
const originalString = inputElement.value;
const reversedString = originalString.split('').reverse().join('');
resultElement.textContent = reversedString;
}