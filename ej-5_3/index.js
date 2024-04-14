/*
* * * * * * * *
 * * * * * * *
* * * * * * * *
 * * * * * * * 
* * * * * * * *
 * * * * * * * 
* * * * * * * *
 * * * * * * * 
*/
let linePar = '';
let lineImpar = '';

for ( let i = 0; i <= 7; i++ ) {

    if ( i % 2 == 0 ) {
        //* * * * * * * * 
        linePar = '';
        for ( let j = 0; j <= 7; j++ ) {
            if ( j < 7 ) {
                linePar = linePar + '*';
                linePar = linePar + '_';
                if ( j == 6 ) {
                    linePar = linePar + '*';
                }
            }
        }
        
        document.write( linePar );

    } else {
        //* * * * * * * 
        lineImpar = '';
        for ( let k = 0; k <= 6; k++ ) {
            lineImpar = lineImpar + '_*';
        }
        document.write( lineImpar );
    }


    
    document.write( '<br>' );

}
