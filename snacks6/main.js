'use strict';

//Fate generare un numero random da 0 a 10 al computer
let min = 1;
let max = 10;
let randomNumbers = Math.floor(Math.random() * (max-min+1)) + min; 

//e chiedete all'utente di inserire un suo numero.
let userNumbers = Number(prompt('Inserisci qui un numero compreso tra 1 e 10'));

//Se il numero scelto dall'utente è uguale al numero del computer 
if (userNumbers === randomNumbers) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}

//informate l'utente che ha vinto, 


//altrimenti ha perso.
