// JavaScript Kalkylator Basics - Förenklad version
// Vi börjar bara med ADDITION och bara 2 siffror!

// STEG 1: En enkel addition-funktion
function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}


function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    return a / b;
}

// STEG 2: Globala variabler (bara för addition nu)
let firstNumber = '';
let operation = '';
let secondNumber = '';
let displayValue = '0';

// STEG 3: Uppdatera displayen
function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.textContent = displayValue;
}

// STEG 4: Uppdatera debug-info
function updateDebug() {
    document.getElementById('first-number').textContent = firstNumber || '-';
    document.getElementById('operation').textContent = operation || '-';
    document.getElementById('second-number').textContent = secondNumber || '-';
}

// STEG 5: Hantera siffror (bara 1 och 2 fungerar nu)
function handleNumber(number) {
    if (operation === '') {
        firstNumber += number;
        displayValue = firstNumber;
    } else {
        // Vi bygger det andra talet
        secondNumber += number;
        displayValue = secondNumber;
    }
    

    updateDisplay();
    updateDebug();
}

// STEG 6: Hantera bara plus-operationen
function handleOperator(op) {
    if (firstNumber !== '' && operation === '') {
        operation = op;
        updateDebug();
    }
}

// STEG 7: Räkna ut (bara addition)
function calculate() {
    if (firstNumber !== '' && secondNumber !== '') {
        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);
        let result;
        
        if (operation === '+') {
            result = addNumbers(num1, num2);
        } else if (operation === '-') {
            result = subtractNumbers(num1, num2);  // Du behöver skriva denna funktion!
        } else if (operation === '*') {
            result = multiplyNumbers(num1, num2);  
        } else if (operation === '/') {
            result = divideNumbers(num1, num2);  
        }
        displayValue = result;
        updateDisplay();

        // Återställ
  function clearAll() {
    firstNumber = '';
    operation = '';
    secondNumber = '';
    displayValue = '0';
    updateDisplay();
    updateDebug();
}

document.getElementById('btn-clear').addEventListener('click', function() {
    clearAll();
});
    }
}

// STEG 8: Event listeners (bara för knapparna vi har)
document.getElementById('btn-1').addEventListener('click', function () {
    handleNumber('1');
});

document.getElementById('btn-2').addEventListener('click', function () {
    handleNumber('2');
});

document.getElementById('btn-3').addEventListener('click', function() {
    handleNumber('3');
});

document.getElementById('btn-4').addEventListener('click', function() {
    handleNumber('4');
});


document.getElementById('btn-5').addEventListener('click', function() {
    handleNumber('5');
});


document.getElementById('btn-6').addEventListener('click', function() {
    handleNumber('6');
});


document.getElementById('btn-7').addEventListener('click', function() {
    handleNumber('7');
});


document.getElementById('btn-8').addEventListener('click', function() {
    handleNumber('8');
});


document.getElementById('btn-9').addEventListener('click', function() {
    handleNumber('9');
});


document.getElementById('btn-0').addEventListener('click', function() {
    handleNumber('0');
});

document.getElementById('btn-plus').addEventListener('click', function () {
    handleOperator('+');
});

document.getElementById('btn-minus').addEventListener('click', function() {
    handleOperator('-');
});


document.getElementById('btn-multiply').addEventListener('click', function() {
    handleOperator('*');
});


document.getElementById('btn-divide').addEventListener('click', function() {
    handleOperator('/');
});

document.getElementById('btn-equals').addEventListener('click', function () {
    calculate();
});

// TESTOMRÅDE
console.log('Kalkylator laddad!');
console.log('Testa: Tryck 1, sedan +, sedan 2, sedan =');
console.log('Vad händer? Får du 12 istället för 3?');
console.log('Hint: Strings vs Numbers!');
