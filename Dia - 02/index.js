
function mostrarResultado(resultado) {
    document.getElementById("resultado").textContent = resultado;
}

function suma() {
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    mostrarResultado(num1 + num2);
}

function resta() {
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    mostrarResultado(num1 - num2);
}

function multiplicacion() {
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    mostrarResultado(num1 * num2);
}

function division() {
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    mostrarResultado(num1 / num2);
}

function raiz() {
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    mostrarResultado(Math.sqrt(num1));
}

function potencia() {
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    mostrarResultado(Math.pow(num1,num2));
}

function potencia() {
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    mostrarResultado(Math.pow(num1,num2));
}

function valorAbsoluto() {
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    mostrarResultado(Math.abs(num1));
}

function numRandom() {
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    mostrarResultado(Math.round(Math.random() * (num2 - num1) + num1));
}

function redondeo(){
    let resultado = document.getElementById("resultado").textContent;
    mostrarResultado(Math.round(resultado));
}

function redondeoPiso(){
    let resultado = document.getElementById("resultado").textContent;
    mostrarResultado(Math.floor(resultado));
}

function redondeoTecho(){
    let resultado = document.getElementById("resultado").textContent;
    mostrarResultado(Math.ceil(resultado));
}