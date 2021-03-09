/*Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/


 // funzione con cui puoi creare array con n numeri elementi diversi tra loro

function bombeInArray (array, numeroElementi){

  while (array.length < numeroElementi) {

    var numeroCasuale = Math.floor(Math.random() * (100 - 1) + 1);

    if (array.includes(numeroCasuale) == false ){

      array.push(numeroCasuale);

    }
  }

  return array;
}

// fine funzione

// 1 genero tot numeri casuali da 1 a 100

var bombe = [];
var risposte = [];

var numeroUtente;

// invoco funzione

bombeInArray(bombe, 16);


console.log(bombe);

// 2 chiedo all'utente numeri casuali

while ( risposte.length < 7 && bombe.includes(numeroUtente) == false ){

  numeroUtente = parseInt(prompt("inserisci un numero"));

  // 3 se numero utente è presente nella lista perde

  if ( isNaN(numeroUtente) )  {

    alert("devi inserire solo numeri");

  }  else if (numeroUtente <= 0 || numeroUtente > 100 ){

    alert("deve essere compreso da 1 e 10");

  } else if ( risposte.includes(numeroUtente) == false ){

    risposte.push(numeroUtente);

  }

}

// 4 esito con punteggio partita

if ( risposte.length == 7){

  alert ("hai vinto il tuo punteggio è: " + risposte.length);

} else{

  alert("hai perso il tuo punteggio è: " + (risposte.length - 1) );

}


console.log(risposte);
