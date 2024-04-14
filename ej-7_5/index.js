// Mostrar todos los elementos dentro de un array sumándole uno a cada uno.

const myArray = [1, 2, 3, 8, 9, 10];
const myArray2 = [];

for ( let i = 0; i < myArray.length; i++ ) {
    myArray2.push( myArray[i] + 1 );
    document.write( `${myArray2[i]} <br>` );
}
