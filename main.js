//Array de objetos inicial
const personas = [
  {nombre: "marcos", edad: 32, peso: 85, estatura: 178},
  {nombre: "maria", edad: 26, peso: 65, estatura: 159},
  {nombre: "julieta", edad: 24, peso: 70, estatura: 160},
  {nombre: "vanessa", edad: 61, peso: 70, estatura: 158},
  {nombre: "diego", edad: 63, peso: 90, estatura: 180},
];

//funcion para agregar a una nueva persona en el array inicial
function agregarPersona() {
  class Persona {
    constructor(nombre, edad, peso, estatura) {
      this.nombre = nombre;
      this.edad = edad;
      this.peso = peso;
      this.estatura = estatura;
    }
  
    agregarAlArray() {
      personas.push(this);
    }
  };

  //Solicitar los datos al usuario para poder agregarlos
  let nombre = prompt("Ingrese el nombre de la persona:");
  let edad = parseInt(prompt("Ingrese la edad de la persona:"));
  let peso = parseFloat(prompt("Ingrese el peso de la persona (en kg):"));
  let estatura = parseFloat(prompt("Ingrese la estatura de la persona (en metros):"));

  //Instanciar un objeto 
  let nuevaPersona = new Persona(nombre, edad, peso, estatura);
  nuevaPersona.agregarAlArray();
  
  let mensajeNuevo = `
      ¡Los siguientes datos fueron agregados con éxito!
      Nombre: ${nuevaPersona.nombre}
      Edad: ${nuevaPersona.edad}
      Peso: ${nuevaPersona.peso}
      Estatura: ${nuevaPersona.estatura}
  `;
  alert(mensajeNuevo);
};

let dato = prompt("Consulte por nombre");
const persona = personas.find((p) => p.nombre.toLowerCase() === dato.toLowerCase());
  if (persona) {
    let mensaje = `
      Se encontró la siguiente coincidencia:
      Nombre: ${persona.nombre}
      Edad: ${persona.edad}
      Peso: ${persona.peso}
      Estatura: ${persona.estatura}
    `;
    alert(mensaje);
  } else {
    alert("El nombre ingresado no corresponde con una persona censada");
    agregarPersona();
  };
