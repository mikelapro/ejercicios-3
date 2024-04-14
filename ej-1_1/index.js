// Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego
// muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con
// el resultado de la suma.

let num1 = prompt( 'Ingrese un número', '1' );
let num2 = prompt( 'Ingrese otro número', '2' );

num1 = parseInt( num1 );
num2 = parseInt( num2 );

const sumar = ( num1, num2 ) => {
    const resultado = num1 + num2;

    return resultado;
};

alert( sumar( num1, num2 ) );
