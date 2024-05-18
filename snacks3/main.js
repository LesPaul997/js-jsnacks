'use strict';

//Variabile Somma
let somma = 0 ;

//Qui inizia il ciclo dei 10 numeri richiesti
for (let i = 1; i <= 10 ; i++) {
    somma += +prompt ('Inserisci il numero');
}

//Stampo il risultato
console.log(somma); 