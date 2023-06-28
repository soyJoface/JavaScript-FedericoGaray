
function saludar() {

    let nombreUsuario = document.querySelector('#nombreUsuario').value;
    alert( `Hola ${nombreUsuario}`);

}

function mostrarNombre() {
    let nombreUsuario = document.querySelector('#nombreUsuario').value;
    let elementoTexto = document.querySelector('#elementoTexto');

    elementoTexto.textContent= nombreUsuario;
}