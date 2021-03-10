/*Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/


 // funzione con cui puoi creare array con n numeri elementi diversi tra loro

function bombeInArray (array, numeroElementi, max) {

  while (array.length < numeroElementi) {

    var numeroCasuale = Math.floor(Math.random() * (max - 1) + 1);

    if (array.includes(numeroCasuale) == false ){

      array.push(numeroCasuale);

    }
  }

  return array;
}

// fine funzione

// 1 genero tot numeri casuali da 1 a 100

// bonus livello di difficoltà
var max = 100;
var livello;

while (livello != 0 && livello != 1 && livello != 2){
  var livello = parseInt(prompt("Scegli il livello di difficoltà tra 0 per 100 numero, 1 per 80 numeri e 2 per 50 numeri"));
}

if (livello == 1){

  max = 80;

} else if (livello == 2){

  max = 50;

}
console.log(max);

// bonus livello di difficoltà

var numeroBombe = 16;
var bombe = [];

var risposte = [];

var numeroUtente;

// invoco funzione

bombeInArray(bombe, numeroBombe, max);


console.log(bombe);

// 2 chiedo all'utente numeri casuali

while ( risposte.length < (max - numeroBombe) && bombe.includes(numeroUtente) == false ){

  numeroUtente = parseInt(prompt("inserisci un numero"));

  // 3 se numero utente è presente nella lista perde

  if ( isNaN(numeroUtente) )  {

    alert("devi inserire solo numeri");

  }  else if (numeroUtente <= 0 || numeroUtente > max ){

    alert("deve essere compreso da 1 e " + max);

  } else if ( risposte.includes(numeroUtente) == false ){

    risposte.push(numeroUtente);

  } else{
    alert("non puoi inserire lo stesso numero");
  }

}

// 4 esito con punteggio partita

if ( risposte.length == (max - numeroBombe)){

  alert ("hai vinto il tuo punteggio è: " + risposte.length);

} else{

  alert("hai perso il tuo punteggio è: " + (risposte.length - 1) );

}


console.log(risposte);
