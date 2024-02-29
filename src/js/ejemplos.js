/*const date = new Date();
let nameUser = prompt("Ingresa tu nombre:");
let numControl = prompt("Ingresa tu numero de control:");
let birthday = prompt("Ingresa tu año de nacimiento:");
const edad = date.getFullYear() - birthday;
console.log(`Los datos del alumno son: \n
 nombre: ${nameUser}\n 
 numero de control: ${numControl}\n
 edad: ${edad}`);*/

//calcular el perimetro de un rectangulo

/*const weight =parseFloat(prompt("Ingresa el ancho del perimetro"));
 const height =parseFloat(prompt("Ingresa la altura del perimetro"));
 console.log('El perimetro es: ' + (weight + height));

 const perimetroRectangle = 2 * weight + 2 * height;
 console.log('El perimetro es: ' + (perimetroRectangle));*/

/*const gender = 'Masculino';
 console.log(gender.charAt(0));

 let gender = prompt("Ingresa tu genero:").charAt(0);
 console.log(gender);*/

/*let jsonString= '{"Marca":"LG","Modelo":"Zplus","Ram":12,"Procesador":"SnapDragon 8200"}';
 let cadenaNoParseada = jsonString;
 console.log(`cadena no parseada: ${cadenaNoParseada}`);
 let stringParseado = JSON.parse(jsonString);
 console.log(`cadena parseada: ${stringParseado}`);*/

//Suma

/*const a= 45;
 const b= 23;
 const result= a / b;
 console.log(`La division de ${a} / ${b} es igual a: ${result}`);
 console.log(`La division de ${a} / ${b} es igual a: ${Math.round(result)}`);
 console.log(`La division de ${a} / ${b} es igual a: ${result.toFixed(2)}`);*/

/*let a= 6;
 let b= 2;
 a+=b;  // a-=b, a*=b, a/=b, a**=b, a%=b
 console.log(a)*/

/*let name="gael";
 let lastName="cavero";
 console.log(name+lastName);
 
 let x="1";
 let y="1";
 console.log(x+y);

 let x="1";
 let y="1";
 console.log(+x + +y);

 let x="1";
 let y="1";
 console.log(+x + +y);

let x = 2;
let y = '2'; //x==y x!=y x>=y x<y a<=y x===y x!==y
console.log(x !== y);

const isaGirl = true;
const isaCar = true;
const isProgramer = false;
//operadores &&, ||, !
console.log(!(isaGirl || isProgramer));*/

//operadores binarios
//a&b devuelve 1 si ambos operadores son 1
//a|b devuelve 1 si almenos un operador es 1
//a^b devuelve 1 si ambos operadores son diferentes
//-a niega la expresion

/*
  0100
| 1000
------
  1100   ->12

let num1 = 4;
let num2 = 8;

let resultado = num1 | num2;
console.log(resultado);

//al colocar ~ a un elemento lo niega despues de haberle sumado una unidad 
let x = 15;
let resultado = ~x;
console.log(resultado);

//desplazamiento  >>dercha lo recorre y corta el numero
let num = 4;
console.log(num >> 2);

//desplazamiento  <<izquierda lo recorre y suma ceros
let num1 = 7;
console.log(num1 << 1);*/

/*const a = 23,
  b = 'sandia',
  c = 'g';*/

/*let nameFruits = ['pera', 'apple', 'strawberry'];
console.log(nameFruits.push('pineapple'), nameFruits.length);*/

/*let a = 3 + 4,
  b = 4 + 4,
  c = 8 - 2;

//imprimir el valor de a
//pero elevado al cuadrado su valor
//utiliza el operador de potencia y asignacion

console.log((a **= 2), `b=${b}`, `c=${c}`, `a=${a}`);*/

/*
//operador ternario remplaso de if else
let a = 30;
let b = 73;

let result = a > b ? `${a} es mayor que ${b}` : `${a} es menor que ${b}`;
console.log(result);*/

/*realizar un script que solicite el año de nacimiento de una persona
y determine si es mayor de edad utilizando el comando prompt del navegador*/

/*const date = new Date();

let nameUser = prompt('Ingresa tu nombre:');
let birthday = prompt('Ingresa tu año de nacimiento:');

const edad = date.getFullYear() - birthday;

let mayorEdad =
  edad >= 18 ? `${nameUser} es mayor de edad` : `${nameUser} es menor de edad`;
alert(mayorEdad);*/

/*
//Operador TypeOf muetra el tipo de dato de la vazriable que se cheque
//ejemplo

let a = 24;
let b = 23;

console.log(typeof a);*/

//Operador Nullish coalescing a ?? b donde se compara el valor que
//tenga a con el de b si el valor de a es undefined devuelve b y si no devuelve a

/*let a = 21;
let b = 23;
console.log(a ?? b);*/

/*let clientData = {
  nameClient: 'Gael',
  born: 2004,
  adress: null,
  phoneNumber: '9511090881',
};
let clientDataFinal = {
  nameClient:
    clientData.nameClient !== '' && null && undefined
      ? clientData.nameClient
      : 'fulano de tal',
  born: clientData.born !== '' && null && undefined ?  clientData.born : 2000 ,
  adress:
    clientData.adress !== '' && null && undefined
      ? clientData.adress
      : 'la luna',
  phoneNumber:
    clientData.phoneNumber !== '' && null && undefined
      ? clientData.phoneNumber
      : '123123123',
};
console.log(clientDataFinal);*/

//Arrays
/*const nameStudents = ['Dalilah', 'Emanuel', 'Francisco', 'Gael'];
console.log(nameStudents[2]);

const number = [12, 45, 34, 78];

const margeType = [
  'Pedro',
  { nombre: 'Hugo' },
  function () {
    console.log('hola');
  },
  true,
  { clave: 'valor' },
];*/

/*
//Arrays vacios

const array1= new Array();
const array2=[];*/

let fruitsName = ['manzana', 'pera', 'uva', 'platano'];
/*console.log(fruitsName[0]);
console.log(fruitsName[1]);
console.log(fruitsName[2]);
console.log(fruitsName[3]);
console.log(fruitsName);

fruitsName[0] = 'guayaba';
console.log(fruitsName);

console.log(fruitsName.push('durazno'), fruitsName.length);*/

for (let i = 0; i < fruitsName.length; i++) {
  console.log(fruitsName[i]);
}
//for each
fruitsName.forEach(function (elemento) {
  console.log(elemento);
});
//for each con funcion arrow
fruitsName.forEach((element) => console.log(element));

//push pop=elimina el ultimo elemento del array
console.log(fruitsName.pop(fruitsName), fruitsName);
//shift= elimina el primer elemento del array
console.log(fruitsName.shift(fruitsName), fruitsName);
//unshift añade al principio uno o mas elementos
console.log(fruitsName.unshift('nispero', 'rambutan'), fruitsName);

//indexOf busca el indice de un elemento
console.log(fruitsName.indexOf('pera'));

//splice cambia o sustituye valores por otros en la pocicion tal cambiar cierto numero de veces por
fruitsName.splice(2, 0, 'sandia', 'limon');
console.log(fruitsName);

//slice copia de el array que se encuentre entre los indices elegidos
console.log(fruitsName.slice(1, 3));

//soft ordena el array
fruitsName.soft((a, b) => a - b);
console.log(fruitsName);
