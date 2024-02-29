/*num = 2;
if (num == 2) {
  console.log('Son iguales');
}

console.log('Haz llegado al final de sentencia');
*/

let currentDay = new Date().getDay();

const days = {
  domingo: 0,
  lunes: 1,
  martes: 2,
  miercoles: 3,
  jueves: 4,
  viernes: 5,
  sabado: 6,
};

if (days.martes === currentDay) {
  console.log('echale ganas mijo aun no acaba la semana');
} else {
  console.log('felicidades a que costo');
}
