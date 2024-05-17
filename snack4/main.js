'use strict';

//Creo lista invitati
const invitati = ["Mario", "Giovanni", "Carmela"];

//Chiedo il nome all'utente
const userName = prompt ('Digita qui il tuo nome');

//Verifichiamo se è invitato
if (invitati.includes(userName)){
    console.log('Sei dei nostri!');
} else {
    console.log('Mi dispiace non sarai dei nostri!');
}

//---

/* //Esempio fatto da Gaetano a lezione, lo segno per ripeterlo
const invitati = ["Pippo", "Pluto", "Paperino"];
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
} */




