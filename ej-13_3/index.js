// Contar la cantidad de elementos dentro de una matriz.

const arr = [[1, 1], [2, 2]];
let cantidadElementos = 0;

for ( let i = 0; i < arr.length; i++ ) {
    const arrayInterno = arr[i];

    for ( let j = 0; j < arrayInterno.length; j++ ) {
        cantidadElementos++;
    }
}

console.log( cantidadElementos );

// Opción 2.
let cantidadElementos2 = 0;
for ( let i = 0; i < arr.length; i++ ) {
    cantidadElementos2 += arr[i].length;
}
console.log( cantidadElementos2 );
