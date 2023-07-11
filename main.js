//Array de objetos inicial
const personas = [
  { nombre: "marcos", edad: 32, peso: 85, estatura: 178 },
  { nombre: "maria", edad: 26, peso: 65, estatura: 159 },
  { nombre: "julieta", edad: 24, peso: 70, estatura: 160 },
  { nombre: "vanessa", edad: 61, peso: 70, estatura: 158 },
  { nombre: "diego", edad: 63, peso: 90, estatura: 180 },
];

function consultarNombreCensado(array, propiedad, valor) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][propiedad] === valor) {
      return array[i];
    }
  }
  return null;
}

let nombreBuscado = prompt(
  "Ingrese el nombre de la persona que busca en el censo:"
);
let personaEncontrada = consultarNombreCensado(
  personas,
  "nombre",
  nombreBuscado
);

if (personaEncontrada !== null) {
  let mensaje = `
    Se encontró la siguiente coincidencia:
    Nombre: ${personaEncontrada.nombre}
    Edad: ${personaEncontrada.edad}
    Peso: ${personaEncontrada.peso}
    Estatura: ${personaEncontrada.estatura}
  `;
  alert(mensaje);
} else {
  alert(
    "El nombre ingresado no corresponde con una persona que haya sido censada. Ingrese los datos que se solicitan a continuación para agregar nueva persona al censo"
  );

  // Pedir al usuario los valores para el nuevo objeto
  let nuevoNombre = prompt("Ingrese el nombre de la persona a censar:");
  let nuevaEdad = prompt("Ingrese la edad de la persona a censar:");
  let nuevoPeso = prompt("Ingrese el peso de la persona a censar");
  let nuevaEstatura = prompt("Ingrese la estatura de la persona a censar:");

  // Crear el nuevo objeto
  let nuevaPersona = {
    nombre: nuevoNombre,
    edad: parseInt(nuevaEdad),
    peso: parseInt(nuevoPeso),
    estatura: parseInt(nuevaEstatura),
  };
  let mensajeNuevo = `
      ¡Los siguientes datos fueron agregados con éxito!
      Nombre: ${nuevaPersona.nombre}
      Edad: ${nuevaPersona.edad}
      Peso: ${nuevaPersona.peso}
      Estatura: ${nuevaPersona.estatura}
  `;
  alert(mensajeNuevo);

  // Agregar el nuevo objeto al array
  personas.push(nuevaPersona);
  console.log("Nuevo objeto agregado:", nuevaPersona);
}

console.log("Array actualizado:", personas);
