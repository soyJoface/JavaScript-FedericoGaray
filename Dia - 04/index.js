let myArray = [3.5,3.8,3.7,4.3,4.0,3.9,4.8,4.7, 1.3];

let notasAqui = document.querySelector("#notasAqui");


function mostrarNotas() {
    for (let notas of myArray) {
        let itemLista = document.createElement("li");
        itemLista.style.listStyle = "none";
        itemLista.innerHTML = notas;
        notasAqui.appendChild(itemLista);  
    }
}


function promedio(){
    let suma = 0;

    for (let i = 0; i < myArray.length; i++) {
        suma+= myArray[i];
    }

    let promedio = (suma/myArray.length);
    document.querySelector("#promedio").textContent = promedio.toFixed(2);
}

function notaMayor() {
    let i = 0;
    let mejorNota = 0;

    while (i < myArray.length) {
        if (myArray[i] > mejorNota) {
            mejorNota = myArray[i]
        }
        i++;
    }

    document.querySelector("#notaAlta").textContent = mejorNota;
}

function reprobado() {
    let materiaPerdida = false;
    let i = 0;

    do {
        if (myArray[i] < 3.0) {
            materiaPerdida = true;
            break;
        }
        i++;
    } while (i < myArray.length);

    if (materiaPerdida == true) {
        document.querySelector("#reprobado").textContent = "Hay por lo menos alguna materia reprobada";
    } else {
        document.querySelector("#reprobado").textContent = "No hay materias reprobadas";
    }
}


function eliminar(){
    location.reload();
}