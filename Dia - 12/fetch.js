
async function agregarRegistro(nombre, datos) {
    try {
        let respuesta = await fetch('https://www.udemy.com/course/javascript-total/learn/quiz/5850222#questions', {
            method: 'POST' ,
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify({
                name: nombre,
                data: datos,
            })
        })
        
        if(!respuesta.ok) {
            throw new Error('Error en la solicitud' + respuesta.statusText)
        }
        
        let data = await respuesta.json();
        console.log(data);
        
    }catch(error) {
    console.error(error)
    }
}






function agregarRegistro( identificador, nombre ) {
    fetch('https://api.restful-api.dev/objects/' + identificador, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify( {
            name: nombre,
        })

    })
    .then( (res) => res.json() )
    .then( (salida) => console.log(salida) )
    .catch( (error) => console.error(`Algo ha salido mal: ${error} `) )

}




function agregarRegistro( identificador ) {
    fetch('https://api.restful-api.dev/objects/' + identificador, {
        method: 'DELETE',

    })
    .then( (res) => res.json() )
    .then( (salida) => console.log(salida) )
    .catch( (error) => console.error(`Algo ha salido mal: ${error} `) )

}
