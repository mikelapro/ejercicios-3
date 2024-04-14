// Mostrar todos los elementos dentro de un array sumándole uno a cada uno.

const myArray = [1, 2, 3, 4, 5, 6];

for ( let i = 0; i < myArray.length; i++ ) {
    document.write( `${myArray[i + 1]} <br>` );
}
