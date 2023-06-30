/* Ejemplo de como se maneja el fetch();

let datosJson;

fetch(url)
.then( (res) => res.json() )
.then( (salida) => {
   datosJson = salida;
   
   let elementoTexto = document.querySelector('#');
   elementoTexto = datosJson.nombre;
})
.catch( (error) => {
    alert(error);
})
*/

