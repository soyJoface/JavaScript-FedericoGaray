// AXIOS:

//GET
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((respuesta) => console.log( respuesta.data))
    .catch((error) => console.error(error))


//POST
let datos = {
    title: 'Nuevo POST',
    body: 'Mi contenido'
}
axios.post('https://jsonplaceholder.typicode.com/posts', datos)
    .then((respuesta) => console.log('El post fue creado con éxito', respuesta))
    .catch((error) => console.error('Error al publicar', error))





let pedido1 = axios.get('http://api.ejemplo.com/data1');
let pedido2 = axios.get('http://api.ejemplo.com/data2');
let pedido3 = axios.get('http://api.ejemplo.com/data3');

Promise.all( [pedido1, pedido2, pedido3] )
.then( (([respuesta1, respuesta2, respuesta3]) => {
    //Código
} ) )
.catch( (error) => {
    //Manejar errores
} )