/* 
Normalización de Bases de Datos
1. Primera forma normal (1NF): Cada tabla debe tener una clave primaria única y cada columna de la tabla debe ser atómica, es decir, no debe contener valores múltiples para un atributo.
2. Segundo forma normal (2NF): Cada columna que no sea la clave primaria debe depender completamente de la clave primaria y no de otra parte de ella
3. Tercera forma normal (3NF): Cada columna que no es parte de la clave primaria debe depender únicamente de esa clave primaria y no de ninguna otra columna ni clave
*/


// Configurar con Express el servidor de la app
const express = requiere('express');
const app     = express();

app.set( 'port', 3000 );
app.listen( 3000 );


// Llamar al componente de mysql
var mysql = requiere( 'mysql' );


// Establecer los parámetros de la conexión
var connection = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'misifu1710',
    database: 'nombreBaseDatos'
});



// Conectase con la base
connection.connect();


// Agregar un nuevo registro
connection.query('INSERT INTO cliente VALUES (1, "Federico", 1, 155155, "Av. Siempreviva 4269")', function( error, resultados ) {
    if( error ) throw error;
    console.log( resultados );
});



// Realizar la consulta a la tabla
connection.query('SELECT * FROM cliente', function( error, filas ){
    if( error ) throw error;
    console.log( filas );
});


// Realizar modificación de clientes
connection.query('UPDATE cliente SET genero = 0, telefono = 166166 WHERE identificador = 1', function( error, resultados) {
    if( error ) throw error;
    console.log( resultados );
});


// Eliminar un registro
connection.query('DELETE FROM cliente WHERE identificador = 1', function( error, resultados) {
    if( error ) throw error;
    console.log( resultados );
});


// Cerrar conexión
connection.end();
