// Crear un programa que determine si un número introducido en un Prompt es par o no, la
// respuesta será mostrada en una alerta.

let numero = prompt( 'Ingrese un número', '2' );
let respuesta = '';

numero = parseInt( numero );

const esPar = ( numero ) => {
    const esPar = numero % 2 == 0;

    return esPar;
};

if ( esPar( numero ) ) {
    respuesta = `${numero} es par.`;
} else {
    respuesta = `${numero} es impar.`;
}

alert( respuesta );
