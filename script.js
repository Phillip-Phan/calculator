const buttons = document.getElementById('buttons');

let currentValue = 0;
let input = 'default';
let displayString = '0';
let operator = 'none';
let firstNumber = '';
let secondNumber = '';
let begin = true;
const output = document.getElementById('output');

output.textContent = 0;

const number = buttons.querySelectorAll('button');

number.forEach( number_button => {    
    if (Number(number_button.id) || number_button.id == '0') {
        number_button.addEventListener( 'click' , () => {
            appendNumber(number_button.id);
        })
    }
})

function appendNumber(number) {
    if (begin) {
        output.textContent = number;
        begin = false;
    } else {
        output.textContent += number;
    }
}

//addd event listener to clear button
document.getElementById('clear').addEventListener( 'click', () => {
    currentValue = 0;
    display();
    begin = true;
    console.log(`${currentValue}, ${input}`);
});

document.getElementById('-').addEventListener( 'click', () => {
    if (operator != 'none') checkIfCanOperate();
    operator = '-';
    firstNumber = output.textContent;
    begin = true;
});


document.getElementById('/').addEventListener( 'click', () => {
    if (operator != 'none') checkIfCanOperate();
    operator = '/';
    firstNumber = output.textContent;
    begin = true;
});


document.getElementById('*').addEventListener( 'click', () => {
    if (operator != 'none') checkIfCanOperate();
    operator = '*';
    firstNumber = output.textContent;
    begin = true;
});


document.getElementById('+').addEventListener( 'click', () => {
    if (operator != 'none') checkIfCanOperate();
    operator = '+';
    firstNumber = output.textContent;
    begin = true;
});


function checkIfCanOperate() {
    secondNumber = screen.textContent;
    console.log(firstNumber,secondNumber);
}

document.getElementById('=').addEventListener( 'click', () => {

    secondNumber = output.textContent;

    switch (operator) {
        case '+':
            currentValue = add(firstNumber, secondNumber);
            operator = 'none';
            break;
        case '-':
            currentValue = subtract(firstNumber, secondNumber);
            operator = 'none';
            break;

        case '/':
            currentValue = divide(firstNumber, secondNumber);
            operator = 'none';
            break;

        case '*':
            currentValue = multiply(firstNumber, secondNumber);
            operator = 'none';
            break;

    }

    output.innerHTML = currentValue;
});

function display() {
    if (input === 'default') 
        output.innerHTML = currentValue;
    else
        output.innerHTML = input;
}

function add(firstNumber, secondNumber) {
    console.log(`${firstNumber} + ${secondNumber}`);
    return Number(firstNumber) + Number(secondNumber);
}

function subtract(number1, number2) {
    console.log(`${firstNumber} - ${secondNumber}`);
    return Number(firstNumber) - Number(secondNumber);
}

function multiply(number1, number2) {
    console.log(`${firstNumber} * ${secondNumber}`);
    return Number(firstNumber) * Number(secondNumber);
}

function divide(number1, number2) {
    console.log(`${firstNumber} / ${secondNumber}`);
    return Number(firstNumber) / Number(secondNumber);
}

