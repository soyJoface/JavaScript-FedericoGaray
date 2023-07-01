let selector = document.querySelector('#selectBuscador');
let input = document.querySelector('#inputBuscar');
let botonBuscar = document.querySelector('#botonBuscar');
let lista = document.querySelector('#miLista');
let variableBuscar;



// Para informarle al usuario que ha cambiado su archivo de búsqueda
selector.addEventListener('change', busquedaVariable);
function busquedaVariable(){
    variableBuscar = selector.value;
    alert(`Se ha iniciado la búsqueda en: ${variableBuscar}`);
}


// No se admitiran números en la búsqueda ni caracteres especiales
input.addEventListener('keydown', verificarLetra);
function verificarLetra(event) {
    if (event.keyCode !== 32 && (event.keyCode < 65 || event.keyCode > 91) && event.keyCode !== 8) {
      event.preventDefault();
    }
}




// Iniciar la búsqueda
botonBuscar.addEventListener('click', iniciarBusqueda);
input.addEventListener('keydown', function( event ){
    if(event.keyCode === 13){
        iniciarBusqueda();
    }
})
function iniciarBusqueda(){

    lista.innerHTML = '';
    
    fetch(variableBuscar)
    .then( (resp) => resp.json() )
    .then( (salida) => {
        for( let item of salida.data){
            if( item.nombre.startsWith(input.value.toUpperCase()) ){
                let p = document.createElement('p');
                p.id = item.name;
                p.innerHTML = item.sinopsis;

                let li = document.createElement('li');
                li.innerHTML = item.nombre;


                lista.appendChild(li);
                lista.appendChild(p);

            }
        }
    })
    .catch( (err) => {
        console.log( err )
    } )
}




