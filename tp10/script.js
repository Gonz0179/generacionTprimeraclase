
//1
/*
let objeto_demo={
    uno: "1",
    dos:"2",
    tres:"3"    
}

let uno= "tres"
console.log(objeto_demo[uno])

console.log(objeto_demo['dos'])
console.log(objeto_demo)

//2

let capitales={
    Argentina: 'Buenos Aires',
    Uruguay: 'Montevideo'
}
let lugar = 'Uruguay'


console.log(capitales['lugar'])
console.log(capitales.lugar )
console.log(capitales[lugar])
console.log(capitales['Argentina'])
console.log(capitales.Argentina)
console.log(capitales[Argentina])
                    

//3
let usuario= {
    Nombre: 'Carlos',
    edad: 23,
    direccion:"calle de verdad",
    FechaNacimiento:"14/03/1999",
    Contraseña: 'UnaContraseñaMuySegura'
}
console.log(usuario)
let MiAuto={
}
MiAuto={
    Marca: 'Toyota',
    Año: 2011,
    Nuevo: true,

    modelo:'',
    anotherPropertyKey="precio"
}

console.log(MiAuto)
let miAuto = {};
miAuto.marca = "Toyota";
miAuto.año = 2023;
miAuto.nuevo = true;
let propertyKey = "modelo";
miAuto[propertyKey] = "Corolla";
miAuto.precio = 2000000;
let anotherPropertyKey = "precio";
let nextProperty = "color";
miAuto[nextProperty] = "rojo";

//4

    let peliculas = [
        { titulo: "Búsqueda implacable", rating: 5, loHasVisto: true },
        { titulo: "Norbit", rating: 3, loHasVisto: false },
        { titulo: "Mini espías", rating: 2, loHasVisto: true },
        { titulo: "La vida es bella", rating: 5, loHasVisto: false }
]

    for (let i = 0; i < peliculas.length; i++){
        if (peliculas[i].loHasVisto == true){
            console.log("Has visto: " + peliculas[i].titulo+" puntuacion: "+peliculas[i].rating);
        }
    }

//5
//creacion de clase 

class NumerosDuplicados {
    constructor(numeros) {
        this.numeros = numeros; // Aquí se guarda el array
        this.numerosDuplicados = {}; // Aquí se guardan los duplicados
    }

    // Función para duplicar
    calcularDuplicados() {
        for (let i = 0; i < this.numeros.length; i++) { // Se recorre el arreglo
            this.numerosDuplicados[this.numeros[i]] = this.numeros[i] * 2;
        }
    }
    mostrarDuplicados() {
        for (let numero in this.numerosDuplicados) {
            console.log(`${numero}: ${this.numerosDuplicados[numero]}`);
        }
    }
}
// Arreglo 
let numeros = [2, 4, 5, 37, 0];

// Instancia nueva (objeto que usa la clase)
let duplicador = new NumerosDuplicados(numeros);

// Calcular los duplicados
duplicador.calcularDuplicados();

// Mostrar los duplicados
duplicador.mostrarDuplicados();
//omg funciona!!!!

//6


let persona = [
    { nombre: "maria", edad: 27 },
    { nombre: "juan", edad: 35 },
    { nombre: "pablo", edad: 21 },
    { nombre: "jose", edad: 22 },
    { nombre: "maria", edad: 32 },
    { nombre: "juan", edad: 25 }
];

let personasConMasDe27 = persona.filter((persona) => persona.edad >= 27);

console.log(personasConMasDe27);



//7 
let actoresVocales = [];
let actoresPrincipales = ["Tom Hanks", "Johny Depp", "Elizabeth Taylor", "Morgan Freeman", "Jennifer Aniston", "Meryl Streep", "Natalie Portman", "Ashton Kutcher"];
let peliculas = [];
let actoresPrincipalesPorPeliculas = {
    "Titanic": "Leonardo DiCaprio",
    "El padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt"
};
let peliculaPorActor = {};

// Función para verificar si un nombre o apellido comienza con una vocal
function comienzaConVocal(nombre) {
    const vocales = ['A', 'E', 'I', 'O', 'U'];
    let partes = nombre.split(' '); // Dividir el nombre completo en partes
    return vocales.includes(partes[0][0].toUpperCase()) || vocales.includes(partes[1][0].toUpperCase());
}

// Iterar sobre actoresPrincipalesPorPeliculas y agregar actores y películas a sus respectivos arreglos
for (let pelicula in actoresPrincipalesPorPeliculas) {
    let actor = actoresPrincipalesPorPeliculas[pelicula];

    // Agregar actor a actoresPrincipales si no está ya en el arreglo
    if (!actoresPrincipales.includes(actor)) {
        actoresPrincipales.push(actor);
    }

    // Agregar película al arreglo de películas
    peliculas.push(pelicula);

    // Agregar actor y película a peliculaPorActor
    if (!peliculaPorActor[actor]) {
        peliculaPorActor[actor] = [];
    }
    peliculaPorActor[actor].push(pelicula);
}

// Iterar sobre actoresPrincipales y agregar a actoresVocales aquellos que cumplen con la condición
for (let i = 0; i < actoresPrincipales.length; i++) {
    if (comienzaConVocal(actoresPrincipales[i])) {
        actoresVocales.push(actoresPrincipales[i]);
    }
}

console.log("Actores Principales:", actoresPrincipales);
console.log("Películas:", peliculas);
console.log("Película por Actor:", peliculaPorActor);
console.log("Actores Vocales:", actoresVocales);



//8

let persona=[
    { nombre: "maria", edad: 27 },
    { nombre: "juan", edad: 35 },
    { nombre: "pablo", edad: 21 },
    { nombre: "jose", edad: 22 },
    { nombre: "maria", edad: 32 },
    { nombre: "juan", edad: 25 }
]

function ordenar(ordenado){
    ordenado.sort((a, b) => a.edad - b.edad);

    for (let i = 0; i < ordenado.length; i++) {
        ordenado[i].posicion = i + 1;
    }
}
// Llamar a la función
    ordenar(persona);

    console.log(persona);



// 9}


let Productos = [
    { nombre :"Samsumg TV", precio : 10000 ,  articulos: 10},
    { nombre :"Sony PlayStation 5", precio : 20000 ,  articulos: 5},
    { nombre :"Xbox Series X", precio : 15000 ,  articulos: 8},
    { nombre :"Nintendo Switch", precio : 12000 ,  articulos: 15},
    { nombre :"Apple iPad Pro", precio : 18000 , articulos: 16 }
]



let Vendidos = Productos.map(producto => {
    producto.precio *= producto.articulos;
    delete producto.articulos;
    return producto;
  });
  
console.log(Vendidos)
*/