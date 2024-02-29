//estructura
let matrix = [
  [1, 56, 34, 23, 67],
  [78, 23, 11, 67, 5],
  [45, 46, 47, 48, 49],
];

//recorrido con for loop

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

//recorrido con for each

matrix.forEach((fila) => fila.forEach((column) => console.log(column)));

//for of
for (let fila of matrix) {
  for (let column of fila) {
    console.log(column);
  }
}
