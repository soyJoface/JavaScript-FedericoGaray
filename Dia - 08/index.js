
function extraerDatos() {

    let nombre    = document.querySelector('#nombre');
    let nroCuenta = document.querySelector('#nroCuenta');
    let saldoUSD  = document.querySelector('#saldoUSD');
    let saldoEUR  = document.querySelector('#saldoEUR');
    let cbu       = document.querySelector('#cbu');
    let abierto   = document.querySelector('#abierto');
    
    fetch("resumen.json")
    .then( (res) => res.json() )
    .then( (salida) => {
        
        nombre.textContent    = salida.titular;
        nroCuenta.textContent = salida.nro_cuenta;
        saldoUSD.textContent  = salida.saldo[0].monto;
        saldoEUR.textContent  = salida.saldo[1].monto;
        cbu.textContent       = salida.cbu;
        abierto.textContent   = salida.abierto;
    } )
    .catch( (err) => {
        console.log( err );
    } )

    
}