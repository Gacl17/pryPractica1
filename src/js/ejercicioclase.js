//elaborar un script que imprima un en orden descendente tres numeros dados
/*
let a = 2;
let b = 3;
let c = 7;

if (a > b && c) {
    if( b > c){
        console.log(a, b, c);
    } 
    else {
        console.log(c, b, a);
    }
}

if (b > a && c) {
    if( a > c){
        console.log(b, a, c);
    } 
    else {
        console.log(b, c, a);
    }

}
if (a > c) {
    console.log(b, a, c);
} 
else {
    console.log(b, c, a);

}*/

let a = 7;
let b = 5;
let c = 9;
const arrayNumeros = [a, b, c];
const arrayOrdenado = arrayNumeros.sort((a, b) => b - a);
console.log(arrayOrdenado.join(','));
