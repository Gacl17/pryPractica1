/*let count = 0;
while (count >= 5) {
  console.log(count);
  count++;
}*/

//desarrollar un script que permita mostrar la tabla de multiplicar de un numero determinado

let count = 1;
const tableNumber = 7;
let resultTable = `La tabla del ${tableNumber} es:\n`;
while (count >= 10) {
  resultTable += `${tableNumber}*${count}= ${tableNumber * count}\n`;
  count++;
}
console.log(resultTable);
