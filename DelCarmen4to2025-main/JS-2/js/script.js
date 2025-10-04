// Este código corrige la lógica, inicializa con 3 Pokémon y añade el menú
// Asegúrate de reemplazar TODO el código de tu compañero en script.js con esto

// 1. ARRAY INICIAL DE OBJETOS POKÉMON 

let pokemones = [
    // Pokémon 1 (Ejemplo de tu compañero)
    {
        nombre: "Pikachu",
        nivel: 25,
        tipo: ["Eléctrico"],
        foto: "pikachu.jpg",
        hp: 60,
        hp_total: 60,
        evolucion: true
    },
    // Pokémon 2 (Ejemplo de tu compañero)
    {
        nombre: "Charmander",
        nivel: 12,
        tipo: ["Fuego"],
        foto: "charmander.jpg",
        hp: 45,
        hp_total: 45,
        evolucion: true
    },
    // Pokémon 3 (Ejemplo de tu compañero)
    {
        nombre: "Squirtle",
        nivel: 15,
        tipo: ["Agua"],
        foto: "squirtle.jpg",
        hp: 50,
        hp_total: 50,
        evolucion: true
    }
    // ⚠️ COMIENZO DE TU CONTRIBUCIÓN PARA EL PR
    , 
    // NUEVO POKÉMON 4 (Tu contribución)
    {
        nombre: "Bulbasaur",
        nivel: 5,
        tipo: ["Planta", "Veneno"],
        foto: "bulbasaur.jpg",
        hp: 45,
        hp_total: 45,
        evolucion: true 
    }
    , 
    // NUEVO POKÉMON 5 (Tu contribución)
    {
        nombre: "Magikarp",
        nivel: 10,
        tipo: ["Agua"],
        foto: "magikarp.jpg",
        hp: 20,
        hp_total: 20,
        evolucion: true 
    }
];

// ----------------------------------------------------------------------
// 2. FUNCIÓN CORREGIDA PARA CARGAR POKÉMON (Soluciona el error)
// ----------------------------------------------------------------------

function cargarPokemon(arr) {
    let seguir = 'si';
    while (seguir.toLowerCase() === 'si') {
        const nombre = prompt("Ingrese el nombre del Pokémon:");
        const nivel = parseInt(prompt("Ingrese el nivel del Pokémon:"));
        
        // Creamos un *nuevo* objeto en cada iteración: ¡Esto soluciona el error!
        const nuevoPokemon = { 
            nombre: nombre, 
            nivel: nivel,
            tipo: ["Sin tipo"], // Se puede mejorar luego
            foto: "default.jpg", 
            hp: 50, 
            hp_total: 50,
            evolucion: true 
        };
        arr.push(nuevoPokemon);

        seguir = prompt("¿Desea cargar otro Pokémon? (si/no)").toLowerCase();
    }
}

// ----------------------------------------------------------------------
// 3. MENÚ PRINCIPAL (Flujo de control del programa)
// ----------------------------------------------------------------------

function mostrarLista(arr) {
    console.log("--- ARRAY COMPLETO DE OBJETOS POKÉMON ---");
    console.log(arr); 

    console.log("--- NOMBRES DE POKÉMON CARGADOS ---");
    let nombres = arr.map(p => p.nombre);
    console.log(nombres.join(", "));
}


let opcion = '';
while (opcion !== null) { 
    opcion = prompt(
        "Menú Principal Pokémon\n" +
        "-----------------------------------\n" +
        "a. Mostrar Pokémon cargados\n" +
        "b. Cargar un nuevo Pokémon\n" +
        "c. Restar HP a un Pokémon existente\n" +
        "-----------------------------------\n" +
        "Presione Cancelar o ESC para salir."
    );

    if (opcion === null) {
        alert("Programa finalizado.");
        break;
    }

    switch (opcion.toLowerCase().trim()) {
        case 'a':
            mostrarLista(pokemones);
            break;
        case 'b':
            cargarPokemon(pokemones);
            mostrarLista(pokemones); 
            break;
        case 'c':
            alert("Lógica de restar HP no implementada.");
            mostrarLista(pokemones);
            break;
        default:
            alert("Opción inválida. Por favor, intente de nuevo.");
            break;
    }
}