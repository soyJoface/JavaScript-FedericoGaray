/* 
async function obtenerDatos() {
    let respuesta = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');

    let datos = await respuesta.json();

    console.log( datos );
}

obtenerDatos();
*/

async function obtenerTodo() {
    let respuestaGasolina = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');
    let precioGasolina = await respuestaGasolina.json();

    let respuestaDolar = await fetch('https://open.er-api.com/v6/latest/USD');
    let precioDolar = await respuestaDolar.json();

    console.log( precioGasolina, precioDolar);

}

obtenerTodo();