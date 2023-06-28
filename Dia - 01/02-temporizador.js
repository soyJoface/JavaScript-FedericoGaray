// setTimeOut( function(), tiempo );
let tiempoIngresado = document.querySelector('#tiempoIngresadoUsuario');
let salida = document.querySelector('#textoAlarma');

function comenzarTiempo(){
    setTimeout( tiempoCumplido, (tiempoIngresado.value * 1000) )
}

function tiempoCumplido() {
    salida.textContent = 'Encendido';
    salida.style.color = 'Green';
}