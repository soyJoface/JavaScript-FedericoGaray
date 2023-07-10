

function cargarDatos(){
    fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db')
    .then((res) => res.json())
    .then((datos) => {
        for(let data of datos.dispositivos) {
            let mostrarDatos = document.querySelector('#cargarDatosGeneral');
            mostrarDatos.innerHTML += `<b>Referencia:</b> ${data.id} - <b>Marca:</b> <i>${data.marca}</i> - <b>Modelo:</b> <i>${data.modelo}</i> - <b>Color:</b> <i>${data.color}</i>  - <b>Almacenamiento:</b> <i>${data.almacenamiento}</i>  - <b>Procesador:</b> <i>${data.procesador}</i><hr>`
        }
    })
    .catch((error) => alert(`Algo ha salido mal ${error}`))
}


function consultar(){
    
    let id = document.querySelector('#miConsulta').value;
    
    if( id === '' || id > 10 || id < 1 ) {
        alert('No se ha ingresado un ID válido');
        return;
    }
    
    fetch(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${id}`)
    .then((res) => res.json())
    .then((datos) => {
        document.querySelector('#referencia').value     = datos.marca;
        document.querySelector('#modelo').value         = datos.modelo;
        document.querySelector('#color').value          = datos.color;
        document.querySelector('#almacenamiento').value = datos.almacenamiento;
        document.querySelector('#procesador').value     = datos.procesador;
    })
    .catch((error) => alert(`Lo sentimos, algo ha salido mal ${error}`))
}



function modificar(){
    
    let id = document.querySelector('#miConsulta').value;
    
    let marcaNueva          = document.querySelector('#referencia').value     
    let modeloNuevo         = document.querySelector('#modelo').value         
    let colorNuevo          = document.querySelector('#color').value          
    let almacenamientoNuevo = document.querySelector('#almacenamiento').value 
    let procesadorNuevo     = document.querySelector('#procesador').value     
    
    
    fetch(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            marca: marcaNueva,
            modelo: modeloNuevo,
            color: colorNuevo,
            almacenamiento: almacenamientoNuevo,
            procesador: procesadorNuevo,
        }),
    })
    .then((res) => res.json())
    .then((datos) => {
        alert('Se ha modificado el dispositivo')
        console.log(datos);
    } )
    .catch((error) => console.error(error))
}



function eliminar(){
    
    let id = document.querySelector('#miConsulta').value;

    fetch(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${id}`, {
        method: 'DELETE', 
    })
    .then((res) => res.json())
    .then((datos) => {
        alert('Se ha eliminado el dispositivo');
        console.log(datos);
    } )
    .catch((error) => console.error(error))
}



function agregar() {

    let agregarReferencia     = document.querySelector('#agregarMarca').value;
    let agregarModelo         = document.querySelector('#agregarModelo').value;
    let agregarColor          = document.querySelector('#agregarColor').value;
    let agregarAlmacenamiento = document.querySelector('#agregarAlmacenamiento').value;
    let agregarProcesador     = document.querySelector('#agregarProcesador').value;
    
    try {

        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                marca: agregarReferencia,
                modelo: agregarModelo,
                color: agregarColor,
                almacenamiento: agregarAlmacenamiento,
                procesador: agregarProcesador
            })
        })
        .then((res) => res.json())
        .then((datos) => {
            cargarDatos();
            alert(`Se ha agregado un nuevo archivo:\n Marca: ${datos.marca}\n Modelo: ${datos.modelo}\n Color: ${datos.color}\n Almacenamiento: ${datos.almacenamiento}GB\n Procesador: ${datos.procesador}`)
        })
        .catch(error => {
            throw new Error('Error en la solicitud: ' + error)
        })

    } catch(error) {
        console.error(error)
    }


}


