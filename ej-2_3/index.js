// Crear un programa que determine si un número introducido en un popup es divisible
// por 11 y 5 o no, mostrar el resultado con console.log.

let numero = prompt( 'Ingrese un número', '2' );
let resultado = '';

numero = parseInt( numero );

const esDivicible = ( numero, divisor ) => {
    const esDivicible = numero % divisor == 0;

    return esDivicible;
};

if ( esDivicible( numero, 5 ) && esDivicible( numero, 11 ) ) {
    resultado = `${numero} es divicible por 5 y 11.`;
} else {
    resultado = `${numero} no es divicible por 5 y 11.`;
}

console.log( resultado );
