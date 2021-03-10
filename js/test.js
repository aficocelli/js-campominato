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

// bonus livello di difficoltà


// while (livello != 0 && livello != 1 && livello != 2){
//   var livello = parseInt(prompt("Scegli il livello di difficoltà tra 0 per 100 numero, 1 per 80 numeri e 2 per 50 numeri"));
// }
//
// if (livello == 1){
//
//   max = 80;
//
// } else if (livello == 2){
//
//   max = 50;
//
// }
// console.log(max);

// bonus livello di difficoltà
var max = 10;
var numeroBombe = 3;
var bombe = [];



var numeroUtente;

// invoco funzione

bombeInArray(bombe, numeroBombe, max);


console.log(bombe);


var container = document.getElementById('container');



for ( var j = 1; j <= max; j++){

  container.innerHTML += '<div class="box" data-number="'+ j +'">' + j + "</div>";

}

var box = document.getElementsByClassName('box');



for( var i = 0; i <= 100; i++){

  box[i].addEventListener("click",

    function(){
      var risposte = [];
      var data = parseInt(this.getAttribute("data-number"));

      if( bombe.includes(data)){

        alert("hai perso!!! Verrà ricaricata la pagina per una nuova partita!")
        window.location.reload()
      } else {

        risposte.push(data);

      }
      console.log(risposte);

    }

  );

}