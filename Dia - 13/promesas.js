
let miPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let error = false;
        if( error ) {
            reject('La promesa ha fallado')
        } else {

            resolve('La promesa se ha cumplido')
        }
    } )
} )



miPromesa.then( (resultado) => console.log( resultado) )
.catch( (error) => console.log( error ));




let promesa1 = new Promise( ( resolve, reject ) => {
    setTimeout( resolve, 2000, 'Hola' );
});

let promesa2 = new Promise( (resolve, reject ) => {
    setTimeout( resolve, 4000, 'JavaScript' )
});

Promise.all([promesa1, promesa2]).then( (valores) => console.log( valores ));
