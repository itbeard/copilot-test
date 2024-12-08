
const display = document.querySelector('.display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Delete' || event.key === 'Backspace') {
        event.preventDefault();
        deleteLastChar();
    }
});