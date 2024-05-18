'use strict';

//Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.

/* for (let i = 2; i <= 1000; i += 2) {
    console.log(i);
} */
   
//Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito

const userNumbers = parseInt(prompt('Inserisci il numero fino alla quale stampare la tabelina'));

//stampare tutta la tabellina del 2 fino al numero inserito.

for (let i = 2; i <= userNumbers; i += 2) {
    console.log(i);
}