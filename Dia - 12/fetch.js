// Solicitudes POST con Fetch
async function crearPost( titulo, contenido ){
    try {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', { 
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify( {
                title: titulo,
                body: contenido,
                userID: 1,
            } ),
        })

        if( !respuesta.ok ) {
            throw new Error('Error en la solicitud:', respuesta.statusText);
        }

        let data = await respuesta.json();
        console.log( 'Registro creado:', data );

    } catch ( error ) {
        console.error( 'Algo salió mal al crear el registro: ', error );
    }
}

crearPost('Mi título', 'Mi contenido');



//Solicitudes PUT: Modificar un registro existente
fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify( {
        title: 'Nuevo título',
        body: 'Nueva descripción',
    })
})
.then( ( respuesta ) =>  respuesta.json()) 
.then( (data) => console.log( data ))
.catch( (error) => console.error( error ) )





// Solicitudes DELETE
fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method:'DELETE',  
})
.then( ( respuesta ) => respuesta.json())
.then( ( data ) => console.log( data ))
.catch( ( error ) => console.error('Algo salió mal: ', error ));





//Solicitudes con PATCH: Modificar solo una parte del registro, por ejemplo solo el título y no el cuerpo
fetch('https://jsonplaceholder.typicode.com/posts/6', {
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify( {
        title: 'Nuevo título del seis'
    }),
})
.then( (respuesta ) => respuesta.json() )
.then( (data) => console.log( data ))
.catch( (error) => console.log('Algo salió mal:', error))






//FETCH AVANZADO

//Solicitud de credenciales BASIC:
let usuario  = 'Johnatan';
let password = 'JavaScriptTotal';

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Authorization' : 'Basic' + btoa( `${usuario} : ${password}`),
        'Content-Type' : 'application/json'
    },
    
})
.then( (respuesta ) => respuesta.json())
.then( (data) => console.log( data ))
.catch( (error) => console.error('Algo ha salido mal:', error) );



//Solicitud credenciales con BEARER
let token = 'miToken';

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-Type' : 'application/json'
    },
    
})
.then( (respuesta ) => respuesta.json())
.then( (data) => console.log( data ))
.catch( (error) => console.error('Algo ha salido mal:', error) );






// Solicitud busqueda en el caché primero DEFAULT
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    cache: 'default',
    headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-Type' : 'application/json'
    },
    
})
.then( (respuesta ) => respuesta.json())
.then( (data) => console.log( data ))
.catch( (error) => console.error('Algo ha salido mal:', error) );


// Buscar siempre en el servidor sin importar el cache: NO-CACHE
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    cache: 'no-cache',
    headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-Type' : 'application/json'
    },
    
})
.then( (respuesta ) => respuesta.json())
.then( (data) => console.log( data ))
.catch( (error) => console.error('Algo ha salido mal:', error) );


// No almacenar copia en el cache: NO-STORE
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    cache: 'no-store',
    headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-Type' : 'application/json'
    },
    
})
.then( (respuesta ) => respuesta.json())
.then( (data) => console.log( data ))
.catch( (error) => console.error('Algo ha salido mal:', error) );

// RELOAD: Forzar al navegador a descargar el recurso incluso si ya existe copia en el cache
// FORCE-CACHE: El navegador utilice siempre la copia que hay en cache, aunque esté caducada sin consultar al servidor. Si no hay copia, la solicita al servidor.
// ONLY-IF-CACHED: Solo utilizar lo que hay en el cache, no solicita copia al servidor.


//Redirecciones
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    cache: 'no-store',
    redirect: 'follow',
    headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-Type' : 'application/json'
    },
    
})
.then( (respuesta ) => respuesta.json())
.then( (data) => console.log( data ))
.catch( (error) => console.error('Algo ha salido mal:', error) );

// Follow: Seguir todas las redirecciones que reciba, son 20 máximas.
// Error: No seguirá ninguna redireccion.
// Manual: No sigue automáticamente, te devuelve el código de la redirección para que especifiques en el código lo que quieras hacer.