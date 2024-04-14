// Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga
// solo las palabras que empiezan con una vocal.

const myArray = ['Casa', 'Uvas', 'Oso', 'Índice', 'Época', 'Pato'];
const arrayVocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];

const getArrayVocales = ( myArray ) => {
    let myArray2 = [];

    myArray.forEach( palabra => {
        let primeraLetra = palabra.substring( 0, 1 ).toLowerCase();

        if ( arrayVocales.includes( primeraLetra ) ) {
            myArray2.push( palabra );
        }

    } );

    return myArray2;
};

console.log( getArrayVocales( myArray ) );
