let tiempoIngresado = document.querySelector('#tiempoIngresadoUsuario');
let salida = document.querySelector('#textoAlarma');
let elementoSonidoAlarma = document.querySelector('#audioAlarma');

function comenzarTiempo(){
    setTimeout( tiempoCumplido, (tiempoIngresado.value * 1000) )
}

function tiempoCumplido() {
    salida.textContent = 'Encendido';
    salida.style.color = 'Green';

    elementoSonidoAlarma.play();
}

/* <Audio control> </audio> 
Etiqueta que me permite ver el botón de play en pantalla.
*/