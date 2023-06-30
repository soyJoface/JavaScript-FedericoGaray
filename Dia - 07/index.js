
let textoSalida = document.querySelector('#textoResultado');

class Animal {

    // Constructor
    constructor( nombre, peso, edad ) {
        
        this.nombre = nombre;
        this.peso   = peso;
        this.edad   = edad;
    }

    // Getter

    // Setter

    // Método
    informacion() {
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años`;
    }
}

class Perro extends Animal {

    constructor( nombre, peso, edad, raza ) {
        super( nombre, peso, edad );
        this.raza = raza;
    }

    informacion() {
        return ` Perro: ${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.raza}`;
    }
}

class Gato extends Animal {

    constructor( nombre, peso, edad, sexo ) {
        super( nombre, peso, edad );
        this.sexo = sexo;
    }

    informacion() {
        return ` Gato: ${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.sexo}`;
    }

}

class Conejo extends Animal {

    constructor( nombre, peso, edad, color ) {
        super( nombre, peso, edad );
        this.color = color;
    }

    informacion() {
        return ` Conejo: ${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.color}`;
    }


}

let instancias = [];

const perro  = new Perro('Wichiper', 12, 10, 'Labrador');
const gato   = new Gato('Tai', 8, 2, 'Masculino');
const conejo = new Conejo('Matt', 2, 1, 'Femenino');

instancias.push(perro);
instancias.push(gato);
instancias.push(conejo);

console.log(instancias);

function mostrarAnimales() {
    
    limpiarElementos();

    instancias.forEach( (instancia) => {
        let elementoLista = document.createElement('li')
        elementoLista.style.listStyle = 'none';
        elementoLista.textContent = instancia.informacion();
        textoSalida.appendChild(elementoLista);

    } )

    
}

function limpiarElementos(){
    textoSalida.textContent = ' ';
}