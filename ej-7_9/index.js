// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
// determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
let colorUsuario = prompt( 'Ingrse un color', 'aZuL' );
let colores = ['azul', 'amarillo', 'rojo', 'verde', 'café', 'rosa'];
let respuesta = false;

colorUsuario = colorUsuario.toLowerCase();

for ( let i = 0; i < colores.length; i++ ) {

    if ( colores[i] == colorUsuario ) {
        respuesta = true;

        document.write( 'El color que se introdujo está dentro del array.' );

        break;
    }
}

if ( respuesta == false ) {
    document.write( 'El color que se introdujo no está dentro del array.' );
}
