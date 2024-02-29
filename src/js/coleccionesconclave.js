//map y set

let miMapa = new Map();

//agregar elementos al mapa

miMapa.set('clave1', 'rojo');
miMapa.set('clave2', 'negro');
miMapa.set('adress', 'jazmines 203');
miMapa.set('clave4', 'jazmines 203');

/*console.log(miMapa.get('adress'));

//en foreach debemos escribir primero elemento y next clave
miMapa.forEach((element, clave) => {
  console.log(`${clave}: ${element}`);
});

for (let [clave, valor] of miMapa) {
  console.log(`${clave}: ${valor}`);
}

//recorido con for y values

for (let valor of miMapa.values()) {
  console.log(valor);
}*/

//=============set=============

const objSet = new Set();
objSet.add('elemento1');
objSet.add('elemento2');
objSet.add('elemento3');
objSet.add('elemento3');

//console.log(objSet);
//recorrido con for each
objSet.forEach((Element) => {
  console.log(Element);
});
//recorrido con for of
for (let element of objSet) {
  console.log(element);
}
