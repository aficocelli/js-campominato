var container = document.getElementById('container');

var box = document.getElementsByClassName('box');

var risposte = [];


for ( var j = 1; j <= 10; j++){

  container.innerHTML += '<div class="box" data="'+ j +'">' + j + "</div>";

}
var i = 0;

for( i = 0; i <= 10; i++){

    box[i].addEventListener("click",

      function(){

        var data = box[i].getAttribute("data");

        risposte.push(data);
        console.log(risposte);
      }

    );

}
// var numero;
//
// function click (element, valore){
//
//   element[valore].addEventListener("click",
//
//     function(){
//
//       var data = element[valore].getAttribute("data");
//
//       return data;
//     }
//
//   );
//
//   return data;
//
// }
//
// click(box, 0)
//
// console.log(click(box, 0));
