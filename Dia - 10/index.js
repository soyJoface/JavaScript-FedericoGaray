function cargarContenido() {
    cargarCotizaciones();
    cargarElementos();
    cargarTextos();
}

async function cargarCotizaciones(){

    await delay(2000);

    let datos1 = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    let cotizacionBitcon = await datos1.json();
    document.getElementById("cotizacionBitcoin").append(cotizacionBitcon.bpi.USD.rate);

    let datos2 = await fetch("https://open.er-api.com/v6/latest/USD");
    let cotizacionDolarEuro = await datos2.json();
    document.getElementById("cotizacionDolarEuro").append(cotizacionDolarEuro.rates.EUR);

    let datos3 = await fetch("https://open.er-api.com/v6/latest/ARS");
    let cotizacionDolarArg = await datos3.json();
    document.getElementById("cotizacionDolarArg").append(cotizacionDolarArg.rates.USD);

    document.getElementById("imgEspera").style.visibility = "hidden";
}

function cargarElementos(){
    document.getElementById("logo").setAttribute("src", "images.png");
    document.getElementById("titulo").textContent = "Cotizacion Virtual";
    document.getElementById("imgEspera").setAttribute("src", "loading.gif");  
    document.getElementById("imgEspera").style.visibility = "visible";                        
}

function cargarTextos(){
    document.getElementById("cotizacionBitcoin").append("Cotizacion Bitcoin: ")
    document.getElementById("cotizacionDolarEuro").append("Cotizacion Dolar/Euro: ")
    document.getElementById("cotizacionDolarArg").append("Cotizacion Dolar/Euro: ")
}

function delay(ms){
    return new Promise(function(res){
        setTimeout(res,ms);
    })
}
