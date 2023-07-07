/* Callbacks
function sumarNumeros( a, b, callback ) {
    setTimeout( ()=> {
        if( typeof a != 'number' || typeof b != 'number') {
            return callback( new Error('Algun argumento no es número'));
        }
        callback( null, a + b )
    }, 1000);
}

sumarNumeros( 3, 2, ( error, resultado )=> {
    if( error ) {
        console.error( error )
    } else {
        console.log( resultado )
    }
})

*/



/* Promesas
function sumarNumeros( a, b ) {
    return new Promise( ( resolve, reject ) => {
        
        setTimeout( ()=> {
            if( typeof a != 'number' || typeof b != 'number') {
                reject( new Error('Ambos argumentos deben ser números'))
            } else {
                resolve( a + b );
            };
        }, 1000 )
    })
}

sumarNumeros( 3, 7 )
.then( ( resultado ) => console.log( resultado ))
.catch( (error) => console.error( error ));
*/




/* Async - Await
async function sumarNumeros( a, b ) {
    if( typeof a != 'number' || typeof b != 'number' ){
        throw new Error('Algunos de los argumentos no es un número');
    }

    return a + b;
}

async function manejarErrores(){
    try {
        let resultado = await sumarNumeros( 20, 3 );
        console.log( resultado );
    } catch( error ) {
        console.error( error.message );
    }
}

manejarErrores();
*/