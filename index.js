// Calculator program
const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.value === "Error" || display.value === "Infinity" || display.value === "-Infinity" || display.value === "NaN") {
        display.value = "";
    }

    if (display.value.includes('%')) {
        display.value = display.value.replace('%', '/100');
    }

    display.value += input;
}

function removeLastCharacter() {
    if (display.value === "Error" || display.value === "Infinity" || display.value === "-Infinity" || display.value === "NaN") {
        display.value = "";
    }
    
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    console.log(display.value);
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}