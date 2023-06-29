let listaEmpleados = [];

function Empleado(nombre, apellido, edad, cargo, experiencia){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad,
    this.cargo = cargo;
    this.experiencia = experiencia;
}

function agregarEmpleado(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let cargo = document.getElementById("cargo").value;
    let experiencia = document.getElementById("experiencia").value;

    let nuevoEmpleado1 = new Empleado(nombre, apellido, edad, cargo, experiencia);

    listaEmpleados.push(nuevoEmpleado1);

    alert("El empleado ha sido creado correctamente");
    
    limpiarCeldas();
}

function mostrarEmpleados(){
    let mensaje = " ";

    for (nuevoEmpleado1 of listaEmpleados) {
        for (let empleado in nuevoEmpleado1) {
            mensaje += empleado.toUpperCase() + ": " + nuevoEmpleado1[empleado] + ", ";
        } 
        mensaje += "\n"; 
    }

    alert(mensaje);
}

function limpiarCeldas(){
    nombre.value = " ";
    apellido.value = " ";
    edad.value = " ";
    cargo.value = " ";
    experiencia.value = " ";
}
































