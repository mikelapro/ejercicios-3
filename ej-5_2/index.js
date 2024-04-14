/*
*****
*   *
*   *
*   *
*****
*/

console.log(26 / 13 + 9 * 4 - (15 / 5 + 2) - 1);

for ( let i = 0; i <= 4; i++ ) {

    if ( i == 0 || i == 4 ) {
        // Dibuja: *****.
        for ( let j = 0; j <= 4; j++ ) {
            document.write( '*' );
        }
    } else {
        for ( let k = 0; k <= 4; k++ ) {
            if ( k == 0 || k == 4 ) {
        document.write( '*' );
                
            } else {
                document.write( '_' );
            }
        }
    }


    document.write( '<br>' );
}
