console.log('Te presentas a la fila');
function avanzaFila( callback ){
    setTimeout( ()=> {
        console.log('Tu turno ha llegado');
        callback();
    }, 5000 )
}
console.log('Te vas a comprar café');

function mujerTeLlama(){
    console.log('Te presentas a tu turno');
}

avanzaFila( mujerTeLlama );