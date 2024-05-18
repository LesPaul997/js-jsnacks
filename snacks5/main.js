'use strict';

//Crea un array vuoto.
const array = [];
//Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. Stampa l'array alla fine. 
for (let i = 0; i <= 5 ; i++) {
    let num = Number(prompt ('Inserisci il numero'));

//Se è dispari viene trasferito all'interno dell'array
    if (num % 2) {
        array.push(num);
    
}
}
    console.log(array);

