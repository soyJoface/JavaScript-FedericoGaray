/* 
BASES DE DATOS NO RELACIONALES
No se basan en relaciones;
Almancenan en documentos o clacciones
No usan tablas
Priorizan la rápidez de la consulta
Redundancia
Dificulta la actualización de datos
*/


// Configurar con ExpressJS el servidor de la app
const express = requiere('express');
const app     = express();

app.set( 'port', 3000 );
app.listen( 3000 );

// Llamar al objeto MongoClient del componente mongoDB
const {MongoClient} = require('mongodb');

// Función asíncrona para hacer las peticiones al servidor
async function usar() {
    // Crear nueva instancia de Mongo Client
    const client = new MongoClient('mongodb://127.0.0.1:27017/nombreBaseDatos')

    // Nos conectados y hacemos nuestras peticiones
    try {
        const conexion   = await client.connect();
        const controlador = conexion.db().collection('clientes');

        let respuesta, filas, filtro;

        // Insertar nuevo registro
        const nuevoCliente = {nombre: 'Federico Garay', genero: 0, telefono: 1551555, domicilio: 'Av. Siempreviva 4269'};
        respuesta = await controlador.insertOne(nuevoCliente);

        // Realizar una consulta
        filas = await controlador.find().toArray();
        console.log('Seleccion: ', filas)

        // Modificar el registro anterior
        const cambiarCliente = {$set: {genero: 1, telefonono: 166166}};
        filtro = {nombre: 'Federico Garay'};
        respuesta = await controlador.updateOne(filtro, cambiarCliente);
        console.log('Actualizado: ', respuesta);

        // Realizar una consulta
        filtro = {genero: 1};
        filas = await controlador.find(filtro).toArray();
        console.log('Seleccion: ', filas);

        // Eliminar un registro
        filtro = {nombre: 'Federico Garay'};
        respuesta = await controlador.deleteOne(filtro);
        console.log('Eliminado: ', respuesta);

        // Realizar una consulta
        filas = await controlador.find(filtro).toArray();
        console.log('Seleccion: ', filas);

    } catch(error){
        console.error(error)
    }
}

usar();