/*alert("hola");
console.log("hola");

const location1         =          "New York,"         +         "NY";
const location2="New York,"         +         "NY";
const location3=   "New York,"+         "NY";

console.log(location1);
console.log(location2);
console.log(location3);

let valor1 = 45;
let valor2 = "gael";

let edad = 45;
console.log(edad);

let apellido = "cavero";
console.log(cavero);

function varTest(){
    var x = 31; // var tiene un alcance mayor
    if (true){
        var x = 56;
        console.log(x);
    }
    console.log(x);
}
varTest();

console.log(x);
let x = 34; //var permite que aunque la funcion lo mande a llamar y no este ahi lo busca pero con let marca error por eso var ya no se usa
let nombre = prompt("introduce tu nombre");
console.log("tu nombre es:", nombre);*/

/*"use strict";//esto forsa la declaracion de variables
x = 45;
console.log(x);*/

//var tiene ambito de funcion
function ejemploAmbitoVar(){
    if (true){
        var x= 23;
    }
    console.log(x);
}
ejemploAmbitoVar();

function ejemploAmbitoVar(){
    if (true){
        let x= 23;
    }
    console.log(x);
}
ejemploAmbitoVar();

