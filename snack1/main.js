'use strict';

//1 SNACKS

//Chiedo all'utente il primo numero
let firstNumber = prompt ('Digita il primo numero');

//Chiedo all'utente il secondo numero
let secondNumber = prompt ('Digita il secondo numero');

//Tra i due numeri forniti stampo quello maggiore
if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (secondNumber > firstNumber) {
    console.log(secondNumber)
} else {
    console.log('I numeri sono uguali');
} 