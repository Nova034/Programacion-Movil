const readline = require('readline');
const { agregarTarea, listarTareas, completarTarea, eliminarTarea } = require('./funciones');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tareas = [];

// Función para mostrar el menú
function mostrarMenu() {
    console.log("Menú de Tareas:");
    console.log("1. Agregar tarea");
    console.log("2. Listar tareas");
    console.log("3. Completar tarea");
    console.log("4. Eliminar tarea");
    console.log("5. Salir");
    rl.question("Seleccione una opción: ", manejarEntrada);
}

// Función para manejar la opción ingresada
function manejarEntrada(opcion) {
    switch (opcion) {
        case '1':
            rl.question("Descripción de la tarea: ", (descripcion) => {
                agregarTarea(tareas, descripcion);
                mostrarMenu();
            });
            break;
        case '2':
            listarTareas(tareas);
            mostrarMenu();
            break;
        case '3':
            rl.question("Número de la tarea a completar: ", (numero) => {
                completarTarea(tareas, parseInt(numero));
                mostrarMenu();
            });
            break;
        case '4':
            rl.question("Número de la tarea a eliminar: ", (numero) => {
                eliminarTarea(tareas, parseInt(numero));
                mostrarMenu();
            });
            break;
        case '5':
            console.log("Saliendo de la aplicación.");
            rl.close();
            break;
        default:
            console.log("Opción no válida.");
            mostrarMenu();
    }
}

// Iniciar la aplicación mostrando el menú
mostrarMenu();
