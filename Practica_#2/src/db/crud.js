// crud.js - Juan Carlos Mota George - 22-SISN-2-021

export function agregarLibro(biblioteca, libro) {
    biblioteca.libros.push(libro);
    console.log(`El libro "${libro.titulo}" ha sido agregado a la biblioteca. \n`);
}

export function listarLibros(biblioteca) {
    biblioteca.listarLibros();
}

export function buscarPorTitulo(biblioteca, titulo) {
    const librosEncontrados = biblioteca.buscarPorTitulo(titulo);
    librosEncontrados.forEach((libro, index) => console.log(` - ${index + 1}. ${libro.informacion()} \n`));
}

export function buscarPorAutor(biblioteca, autor) {
    const librosEncontrados = biblioteca.buscarPorAutor(autor);
    librosEncontrados.forEach((libro, index) => console.log(` - ${index + 1}. ${libro.informacion()} \n`));
}

export function listarLibrosDisponibles(biblioteca) {
    const librosDisponibles = biblioteca.librosDisponibles();
    librosDisponibles.forEach((libro, index) => console.log(` - ${index + 1}. ${libro.informacion()} \n`));
}

