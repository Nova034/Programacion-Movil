// biblioteca.js - Juan Carlos Mota George - 22-SISN-2-021

export class Biblioteca {
    constructor() {
    this.libros = []; 
    }

    agregarLibro(libro) {
    this.libros.push(libro);
    console.log(`El libro "${libro.titulo}" ha sido agregado a la biblioteca.`);
    }

    listarLibros() {
    if (this.libros.length === 0) {
        console.log('No hay libros en la biblioteca.');
    } else {
        this.libros.forEach((libro, index )=> {
        console.log(`- ${index + 1}. ${libro.informacion()} \n`);
        });
    }
}

    buscarPorTitulo(titulo) {
    const librosEncontrados = this.libros.filter(libro => libro.titulo.toLowerCase().includes(titulo.toLowerCase()));
    return librosEncontrados;
    } 

    buscarPorAutor(nombreAutor) {
    const librosEncontrados = this.libros.filter(libro => libro.autor.nombre.toLowerCase().includes(nombreAutor.toLowerCase()));
    return librosEncontrados;
    }

    librosDisponibles() {
    const librosDisponibles = this.libros.filter(libro => libro.disponibilidad);
    return librosDisponibles;
    }
}
