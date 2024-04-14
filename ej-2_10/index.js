// Escribir un programa JavaScript en el que el programa escoge al azar un entero entre
// 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un
// popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de
// conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará
// un mensaje de "No corresponde".

const numeroAlAzar = Math.floor( Math.random() * 10 ) + 1; // 1 - 10.
let respuesta = '';

let numeroUsuario = prompt( 'Ingrese un número del 1 al 10', '7' );

numeroUsuario = parseInt( numeroUsuario );

if ( numeroUsuario == numeroAlAzar ) {
    respuesta = 'Buen trabajo.';
} else {
    respuesta = 'No corresponde.';
}

alert( respuesta );
