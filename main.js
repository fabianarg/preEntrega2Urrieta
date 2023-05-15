const personas = [                                            //arreglo de objetos(personas dentro de un censo)
    {nombre: "Marcos", edad: 32, peso: 85, estatura: 178},
    {nombre: "Maria", edad: 26, peso: 65, estatura: 159},
    {nombre: "Julieta", edad: 24, peso: 70, estatura: 160},
    {nombre: "Vanessa", edad: 61, peso: 70, estatura: 158},
    {nombre: "Diego", edad: 63, peso: 90, estatura: 180},
];

let dato = prompt("Ingrese su nombre");                   //entrada de datos
const persona = personas.find((p) => p.nombre === dato); //funcion con el metodo find que encuentre coincidencia con el dato ingresado

    if(persona){
        let mensaje = `
        Nombre: ${persona.nombre}
        Edad: ${persona.edad}
        Peso: ${persona.peso}
        Estatura: ${persona.estatura}
        `;
        alert(mensaje);                                                        //salida de datos
    }else{
        alert("El nombre ingresado no corresponde con una persona censada");  //salida de datos
    };

