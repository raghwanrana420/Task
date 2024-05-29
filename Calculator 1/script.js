let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function appendNumber(number) {
    if (display.textContent === '0') {
        display.textContent = number.toString();
    } else {
        display.textContent += number.toString();
    }
}

function appendSymbol(symbol) {
    display.textContent += symbol;
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}
