// Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
// pantalla.

const myArray = [1, 2, 3, 4, 5, 6];
let cont = 0;

do {
    document.write( `${myArray[cont]} <br>` );

    cont++;
} while ( cont < myArray.length );
