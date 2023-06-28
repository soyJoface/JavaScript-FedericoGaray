let textoAlarma = document.querySelector('#textoAlarma');
let elementoSonidoAlarma = document.querySelector('#audioAlarma');

function comenzarReloj() {
    setInterval( ticTac, 1000 );
}

function ticTac() {
    let tiempoActual = new Date();
    let hora = String(tiempoActual.getHours()).padStart(2,'0');
    let minutos = String(tiempoActual.getMinutes()).padStart(2,'0');
    let segundos = String(tiempoActual.getSeconds()).padStart(2,'0');

    let textoHora = `${hora}: ${minutos}: ${segundos}`
    textoAlarma.textContent = textoHora;
}