let tiempoFinalizado;
let conteoRegresivo;

function comenzarPrueba() {
    
    // Tomar el valor del tiempo que el cliente quiere emplear para el tiempo de la prueba.
    let tiempoCliente = document.getElementById("tiempoCliente").value;

    // Mostrar el tiempo en pantalla.
    document.getElementById("temporizador").textContent = tiempoCliente;

    // Mostrar las preguntas en pantalla.
    let preguntas = ["¿Cuáles son los colores primarios?","¿Cuántos planetas hay en el sistema solar?","¿De qué mitología es el dios Odín?","¿Cuantos musculos tiene el cuerpo hurmano?","¿A qué edad murió Jesús?", "¿Quién fue el fundador de la empresa Amazon?", "¿En qué año se descubrió América?", "¿En qué barcó viajó Cristobal Colón?", "¿Qué país ha ganado más copas de un mundial de fútbol?", "¿Cuál fue el detonante de la Primera Guerra Mundial?", "¿Cuál es el idioma más hablado en el mundo?", "¿Cuál es el país más pequeño del mundo?", "Los hermanos ________ inventaron el avión.", "¿Cuál es el río más caudaloso del mundo", "¿Cuál es la formula del área de un circulo?", "¿En qué año llegó el hombre a la luna?", "¿Cuál es la derivada de una constante?", "¿Cual es la integral de euler?", "¿Cuál es el punto de ebullición del agua?", "¿Cuál es el nombre del Papa Actual?", "¿Qué deporte práctica Andy Murray?", "¿Cuantas peleas perdió Flody Mayweather?", "¿Cuantos meses tienen 28 días?", "¿Cuál es el planeta más cercano al sol?"]
    
    document.getElementById("pregunta1").textContent = preguntas[Math.floor(Math.random() * preguntas.length)];  
    document.getElementById("pregunta2").textContent = preguntas[Math.floor(Math.random() * preguntas.length)];  
    document.getElementById("pregunta3").textContent = preguntas[Math.floor(Math.random() * preguntas.length)];  
    document.getElementById("pregunta4").textContent = preguntas[Math.floor(Math.random() * preguntas.length)];  
    document.getElementById("pregunta5").textContent = preguntas[Math.floor(Math.random() * preguntas.length)];  

    // Iniciar el cronometro
        conteoRegresivo = setInterval(function(){
        let cronometro = document.getElementById("temporizador").textContent;
        document.getElementById("temporizador").textContent = cronometro - 1;
    }, 1000)

    // Función a ejecutarse finalizado el tiempo de la prueba.
        tiempoFinalizado = setTimeout(function(){
        clearInterval(conteoRegresivo);
        document.getElementById("tiempoCliente").value = 0;
        document.getElementById("gameOver").textContent = "GAME OVER";
        document.getElementById("button__terminado").style.visibility = "hidden";
        
    }, tiempoCliente * 1000)
    
}

function finalizado() {

    let respuesta1 = document.getElementById("respuesta_1").value;
    let respuesta2 = document.getElementById("respuesta_2").value;
    let respuesta3 = document.getElementById("respuesta_3").value;
    let respuesta4 = document.getElementById("respuesta_4").value;
    let respuesta5 = document.getElementById("respuesta_5").value;
    clearTimeout(conteoRegresivo);
    clearTimeout(tiempoFinalizado);
    alert("Tus respuestas :" +"\n" + "1. " + respuesta1  + "\n" + "2. " + respuesta2 + "\n" + "3. " + respuesta3 + "\n" +  "4. " + respuesta4 + "\n" + "5. " + respuesta5);

    document.getElementById("temporizador").textContent = 0;
    document.getElementById("tiempoCliente").value = 0;
}


function volverAIntentar(){
    location.reload();
}


/* Aspectos a mejorar:
Se debe refactorizar el código, es importante que las funciones solo hagan una sola tarea y no multiples.
Evitar la repeticion del código.
*/