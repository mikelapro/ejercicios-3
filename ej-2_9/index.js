// Determinar si un año dado es bisiesto.

let anio = prompt( 'Ingrese un año', 2024 );
let respuesta = '';

const esBisiesto = ( anio ) => {
    const esBisiesto = ( ( anio % 4 == 0 ) && ( anio % 100 != 0 ) ) || anio % 400 == 0;

    return esBisiesto;
};

if ( esBisiesto( anio ) ) {
    respuesta = `el ${anio} es bisiesto`;
} else {
    respuesta = `el ${anio} no es bisiesto`;
}

alert( respuesta );
