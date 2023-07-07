let mostrarDatosBTC = document.querySelector('#cotizacionBTC');
let mostrarDatosEUR = document.querySelector('#cotizacionEUR');
let mostrarDatosARS = document.querySelector('#cotizacionARS');
let logo            = document.querySelector('#imgLogo');
let titulo          = document.querySelector('#titulo');
let imgEspera       = document.querySelector('#imgCargando')



function cargarTodo() {

    mostrarEncabezado();
    mostrarCotizaciones();
    
}


function mostrarEncabezado() {
    logo.setAttribute('src', 'img/imgCotizacion.png');
    titulo.textContent = 'Cotizaciones Online';
    imgEspera.setAttribute('src', 'img/loading.gif');
    imgEspera.style.visibility = 'visible';

}



async function mostrarCotizaciones() {

    await delay(2500);

    let datosCotizacionBTC = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    let datosBTC = await datosCotizacionBTC.json();
    mostrarDatosBTC.append(datosBTC.bpi.USD.rate);

    let datosCotizacionDolarEuro = await fetch('https://open.er-api.com/v6/latest/USD#');
    let datosEUR = await datosCotizacionDolarEuro.json();
    mostrarDatosEUR.append(datosEUR.rates.EUR);

    let datosCotizacionARSUSD = await fetch('https://open.er-api.com/v6/latest/ARS');
    let datosARS = await datosCotizacionARSUSD.json();
    mostrarDatosARS.append(datosARS.rates.USD);

    imgEspera.style.visibility = 'hidden';

    
}

function delay(ms) {
    return new Promise( (res) => {
        setTimeout( res, ms)
    } )
}