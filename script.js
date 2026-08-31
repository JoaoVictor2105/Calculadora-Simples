const display = document.querySelector('#display');
const previousoperand = document.querySelector('#previous-operand');
const datanumber = document.querySelectorAll('[data-number]');
const dataoperator = document.querySelectorAll('[data-operator]');
const dataclear = document.querySelector('#clear');
const datacalculate = document.querySelector('#equals');
const datadecimal = document.querySelector('[data-action="decimal"]');

let currentValue = '0';
let previousValue = '';
let operator = null;

datanumber.forEach((button) => {
     button.addEventListener('click', () => {
        const digit = button.dataset.number;

if (currentValue === '0') { currentValue = digit } else { currentValue += String(digit) }
display.textContent = currentValue
})});

dataoperator.forEach((button) => {
    button.addEventListener('click', () => {
        const chosenOperator = button.dataset.operator

previousValue = currentValue
operator = chosenOperator
currentValue = ''
previousoperand.textContent = previousValue + ' '+ chosenOperator;
})});

let result = null;
datacalculate.addEventListener('click', () => {
    if (operator === '+') {result = parseFloat(previousValue) + parseFloat(currentValue)}
    else if (operator === '-') {result = parseFloat(previousValue) - parseFloat(currentValue)}
    else if (operator === '*') {result = parseFloat(previousValue) * parseFloat(currentValue)}
    else if (operator === '/') {result = parseFloat(previousValue) / parseFloat(currentValue)}
    
    display.textContent = result
    previousoperand.textContent = ''
    currentValue = String(result)
    operator = null
});

dataclear.addEventListener('click', () =>  {
     currentValue = '0';
     previousValue = '';
     operator = null;
     
     display.textContent = '0'
     previousoperand.textContent = ''
     result = null
    })

datadecimal.addEventListener('click', () => {
    if (!currentValue.includes('.')) {currentValue += '.'}
    display.textContent = currentValue
})