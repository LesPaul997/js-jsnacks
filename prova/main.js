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

//---------------------------------------------------------

//3 SNACKS

/* //Variabile Somma
let somma = 0 ;

//Qui inizia il ciclo dei 10 numeri richiesti
for (let i = 1; i <= 10 ; i++) {
    somma += +prompt ('Inserisci il numero');
}

//Stampo il risultato
console.log(somma); */

//---------------------------------------------------------

//4 SNACKS

/* //Creo lista invitati
const invitati = ["Mario", "Giovanni", "Carmela"];

//Chiedo il nome all'utente
const userName = prompt ('Digita qui il tuo nome');

//Verifichiamo se è invitato
if (invitati.includes(userName)){
    console.log('Sei dei nostri!');
} else {
    console.log('Mi dispiace non sarai dei nostri!');
} */

//---

//Esempio fatto da Gaetano a lezione, lo segno per ripeterlo
/* const invitati = ["Pippo", "Pluto", "Paperino"];
let invitato = false;

//Chiedo il nome all'utente
const input = prompt ('Inserisci il tuo nome');

//Inizio del ciclo e controllo
for (let i = 0; i < invitati.length; i++) {
    const currentValue = invitati[i].toLowerCase();
    const checkValue = input.toLowerCase();

    //Se è invitato chiudo il ciclo e confermo
    if (currentValue === checkValue) {
        invitato = true;
    }
}

//Stampo il messaggio
if (invitato === true) {
    console.log('Sei invitato alla festa!');
} else {
    console.log('Mi dispiace non sei invitato alla festa!')
}
 */


//--------------------------------------------------------------

