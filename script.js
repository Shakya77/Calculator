let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return; // Prevent multiple decimals
    currentInput += number;
    document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
}


function appendOperation(operation) {
    if (currentInput === '') {
        return;
    }
    if (previousInput !== '') {
        calculate();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').value = `${previousInput} ${currentOperation}`;
}

function calculate() {
    if (previousInput === '' || currentInput === '') {
        return;
    }
    let result;
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);
    switch (currentOperation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {  // Handle division by zero
                alert("Error: Division by zero is not allowed.");
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = currentInput;
}


function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);  // Remove the last character
    document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
}