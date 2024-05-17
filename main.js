'use strict';


//1 SNACKS

/* //Chiedo all'utente il primo numero
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
} */



//3 SNACKS

//Variabile Somma
let somma = 0 ;

//Qui inizia il ciclo dei 10 numeri richiesti
for (let i = 1; i <= 10 ; i++) {
    somma += +prompt ('Inserisci il numero');
}

//Stampo il risultato
console.log(somma);

