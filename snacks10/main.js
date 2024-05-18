'use strict';

//Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro.
//Quando l'utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.

let num1 = null;

for (let i = 0; i < 1; i++) {
    let num2 = prompt('Insersci un numero');

    if (num2 !== num1) {
       num1 = num2;
       i--;
    } 
}

alert('Hai vinto!');


