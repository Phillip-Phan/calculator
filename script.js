const buttons = document.getElementById('buttons');
const output = document.getElementById('output');
const number = buttons.querySelectorAll('button');
const addButton = document.getElementById('+');
const subtractButton = document.getElementById('-');
const multiplyButton = document.getElementById('*');
const divideButton = document.getElementById('/');
const message = document.getElementById('message');

let currentValue = 0;
let input = 'default';
let displayString = '0';
let operator = 'none';
let firstNumber = '';
let secondNumber = '';
let begin = true;

output.textContent = 0;


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
    checkLength();
}

function checkLength() {
    if (output.textContent.length >= 12) {
        if (Number.isInteger(Number(output.textContent))) {
            output.textContent = Number(output.textContent).toExponential(2);
        } else {
            output.textContent = output.textContent.slice(0,12);
            message.textContent = "rounded number to fit the space.";
        }
    }
    else {
        message.textContent = "";
    }
}

//addd event listener to clear button
document.getElementById('clear').addEventListener( 'click', () => {
    currentValue = 0;
    display();
    begin = true;
    console.log(`${currentValue}, ${input}`);
});

document.getElementById('C').addEventListener( 'click', () => {
    output.textContent = 0;
    begin = true;
    console.log(`${output.textContent}`);
});

document.getElementById('%').addEventListener( 'click', () => {
    output.textContent = output.textContent / 100;
    console.log(`${output.textContent}`);
});

document.getElementById('-').addEventListener( 'click', () => {
    if (operator != 'none') checkIfCanOperate();
    operator = '-';
    firstNumber = output.textContent;
    begin = true;
});

document.getElementById('.').addEventListener( 'click', () => {
    if (!output.textContent.includes('.')) {
        output.textContent += '.';
    }
    begin = false;
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
            begin = true;
            output.innerHTML = currentValue;
            checkLength();
            break;
        case '-':
            currentValue = subtract(firstNumber, secondNumber);
            operator = 'none';
            begin = true;
            output.innerHTML = currentValue;
            checkLength();
            break;

        case '/':
            currentValue = divide(firstNumber, secondNumber);
            operator = 'none';
            begin = true;
            output.innerHTML = currentValue;
            checkLength();
            break;

        case '*':
            currentValue = multiply(firstNumber, secondNumber);
            operator = 'none';
            begin = true;
            output.innerHTML = currentValue;
            checkLength();
            break;
        default:
            message.textContent = "should press / * - + before =";
            break
    }
});

function roundDecimal(number) {
    return Math.round(number*1000)/1000;
}

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

