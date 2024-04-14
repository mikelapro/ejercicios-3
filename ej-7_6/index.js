// Calcular el promedio
const myArray = [1, 2, 3, 4, 5, 6];
const length = myArray.length;
let resultado = 0;

for ( let i = 0; i < length; i++ ) {
    resultado = resultado + myArray[i];
}

resultado = resultado / length;

console.log( resultado );
