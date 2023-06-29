//Crear una función que genere los parrafos solicitados a partir del parrafo modelo:
function crearParrafo(contenedorID, numeroParrafos){
    
    //Capturar donde se va a mostrar el parrafo:
    let elementoParrafo = document.getElementById(contenedorID);

    //Crear el loop for:
    for (let contador = 1; contador <= numeroParrafos; contador++){

        //Crear el texto label:
        let elementoEtiqueta = "Venta " + contador;

        let elementoCreado = crearParrafoModelo(elementoEtiqueta);

        elementoParrafo.appendChild(elementoCreado);
    }
}

//Crear una función que tenga el prototipo del parrafo:
function crearParrafoModelo(textoLabel){
    
    //Crear el elemento parrafo:
    let elementoParrafo = document.createElement("p");

    //Crear el label:
    let elementoLabel = document.createElement("label");

    //Crear atributos del label:
    elementoLabel.setAttribute("for", textoLabel);

    //Crear el innerHTML del label:
    elementoLabel.innerHTML = textoLabel + ":";

    //Crear el elemento input:
    let elementoInput = document.createElement("input");

    //Crear los atributos del input:
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", 0);
    elementoInput.setAttribute("placeholder", "$");

    //Establecer los elementos creados dentro del elemento parrafo:
    elementoParrafo.appendChild(elementoLabel);
    elementoParrafo.appendChild(elementoInput);

    //Devolver el parrafo creado cuando llamen la función:
    return elementoParrafo;
}

//Crear una función para capturar cada uno de los valores de cada venta creada:
function extrarDatos(elemento){
    
    //Capturar el elemento:
    let elementoCapturado = elemento.value;

    //Convertir el valor de texto a numero:
    let elementoValor = Number(elementoCapturado);

    //Devolver el elemento capturado:
    return elementoValor;
}

//Crear la función calcular:
function calcular(){
    
    //Crear un array que almacene los datos de las ventas:
    let ventas = [];

    //Crear una variable para iterar:
    let posicionVentas = 0;

    //Capturar donde se quiere iterar:
    let elementoSalida = document.getElementById("contenedorID");

    //Crear el loop:
    for (let elemento of elementoSalida.children){

        //Capturar la el valor en una variable:
        let valorVenta = extrarDatos(elemento.children[1]);

        //Agregar el valor al array:
        ventas[posicionVentas] = valorVenta;

        //Iterar la posición ventas:
        posicionVentas++;
    }

    let suma = calcularSuma(ventas);
    let min = calcularMenor(ventas);
    let max = calcularMayor(ventas);

    //Iterar sobre los elementos para agregar estilo CSS según sea la condición:
    for (let elemento of elementoSalida.children){
        valorVenta = extrarDatos(elemento.children[1]);

        elemento.children[1].className = "elementoNeutral";

        if (valorVenta === min){
            elemento.children[1].className = "elementoMin";
        }

        if (valorVenta === max){
            elemento.children[1].className = "elementoMax";
        }
    }
    

    //Capturar donde se quiere plasmar el resultado:
    let mensajeCapturado = document.getElementById("parrafoSalida");
    mensajeCapturado.textContent = "La suma total es: " + suma + ", el elemento mínimo es: " + min + ", el elemento máximo es: " + max;;
}

//Crear una función que sume los elementos de un array:
function calcularSuma(array){

    //Iniciar una variable en cero:
    let sumaTotal = 0;

    //Crear un loop:
    for (let elemento of array){
        sumaTotal+= elemento;
    }

    return sumaTotal;
}

//Crear función para capturar el valor menor:
function calcularMenor(array){

    //Iniciar una variable:
    let min = array[0];

    for (let elemento of array){
        if (elemento < min){
            min = elemento;
        }
    }
    return min;
}

//Crear función para capturar el valor mayor:
function calcularMayor(array){
    
    //Iniciar una variable:
    let max = array[0];
    for (let elemento of array){
        if (elemento > max){
            max = elemento;
        }
    } 

    return max;
}
