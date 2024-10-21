// Función para agregar una nueva tarea
function agregarTarea(tareas, tarea) {
    tareas.push({ descripcion: tarea, completada: false });
    console.log(`Tarea "${tarea}" agregada.\n`);
}

// Función para listar todas las tareas
function listarTareas(tareas) {
    if (tareas.length === 0) {
        console.log("No hay tareas por mostrar.\n");
        return;
    }
    console.log("Lista de tareas:");
    tareas.forEach((tarea, index) => {
        const estado = tarea.completada ? " ✔️ " : " ❌ ";
        console.log(`${index + 1}. ${tarea.descripcion} [${estado}]`);
    });
    console.log(""); // Espacio entre listas
}

// Función para marcar una tarea como completada
function completarTarea(tareas, numero) {
    if (numero > 0 && numero <= tareas.length) {
        tareas[numero - 1].completada = true;
        console.log(`Tarea "${tareas[numero - 1].descripcion}" completada.\n`);
    } else {
        console.log("Número de tarea inválido.\n");
    }
}

// Función para eliminar una tarea
function eliminarTarea(tareas, numero) {
    if (numero > 0 && numero <= tareas.length) {
        const tareaEliminada = tareas.splice(numero - 1, 1);
        console.log(`Tarea "${tareaEliminada[0].descripcion}" eliminada.\n`);
    } else {
        console.log("Número de tarea inválido.\n");
    }
}

// Exportar funciones
module.exports = {
    agregarTarea,
    listarTareas,
    completarTarea,
    eliminarTarea
};
