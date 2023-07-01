/* Eventos: Acciones o interacciones. 
addEventListener();
*/

let boton = document.querySelector('#miBoton');
boton.addEventListener('click', probarFuncion );

function probarFuncion(){
    console.log('Click desde afuera')
}

/* Manejo de Eventos en el DOM
event.target, event.currentTarget, event.preventDefault();
*/





/*
Eventos del teclado: keyDown, keyPress, keyUp
*/

let input = document.querySelector('#miInput');

function evitarLetras( event ) {
    if( event.keyCode < 48 || event.keyCode > 57 ) {
        event.preventDefault();
    }
}

input.addEventListener('keydown', evitarLetras);




/*
Eventos del raton: click, mouseover, mouseout
*/
let botonMenu = document.querySelector('#botonMenu');
let lista = document.querySelector('#listaMenu');

function mostrarMenu() {
    lista.style.display = 'block';
}

function esconderMenu(){
    lista.style.display = 'none';
}

botonMenu.addEventListener('click', mostrarMenu);
botonMenu.addEventListener('mouseout', esconderMenu);



/*
Eventos Personalizados:
1. Se crea el eventos personalizado --> new CustomEvent
2. Asignar el evento personalizado  --> addEventListener() + dispatchEvent()
3. Escuchar el evento en otro componente de la función

*/

let audio = document.querySelector('#audio');
let listaCanciones = document.querySelector('#listaCanciones');


function cambiarCancion(){
    let cancionElegida = listaCanciones.value;
    audio.src = `canciones/${cancionElegida}`;
    audio.play();

    let evento = new CustomEvent('cambioDeCancion');
    audio.dispatchEvent(evento);
}

listaCanciones.addEventListener('change', cambiarCancion);


audio.addEventListener('cambioDeCancion', mostrarCancion);

function mostrarCancion(){
    console.log(`La canción actual es ${listaCanciones.value}`);
}