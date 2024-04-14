// El usuario ingrese un string con varias palabras separadas por coma en un popup y se deben
// convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).
let palabras = prompt( 'Ingrse palabras separadas por coma', 'hola1  ,  hola 2 , hola  3' );

//palabras = palabras.replaceAll( ' ', '' );

const myArray = palabras.split( ',' ).map( pal =>  { return pal.trim() } );


console.log( myArray );
