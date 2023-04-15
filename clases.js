//CLASES: cualquier cosa que pueda interactuar con el mundo real va a ser una entidad, ejemplo persona, auto, animal, etc. 

class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }
    // static especie = "Humano"

// saludar =()=>{
//     console.log (`Hola soy ${this.nombre}`);
// }
// obtenerEspecie = () =>{
//     console.log(`Soy ${Persona.especie}`)
//     }
}


const persona1 = new Persona ("Luciana");
const persona2 = new Persona ("Natalia");

const personas = [persona1, persona2];
console.log(personas);

// persona1.saludar ();
// persona1.obtenerEspecie();

// persona2.saludar ();
// persona2.obtenerEspecie();






