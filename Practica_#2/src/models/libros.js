// libro.js - Juan Carlos Mota George - 22-SISN-2-021

export class Libro {
    constructor(titulo, autor, anioPublicacion) {
        this.titulo = titulo;
        this.autor = autor; 
        this.anioPublicacion = anioPublicacion;
        this.disponibilidad = true; 
}

    informacion() {
        return `${this.titulo} (${this.anioPublicacion}), autor: ${this.autor.informacion()}`;
    }

    prestar() {
        if (this.disponibilidad) {
            this.disponibilidad = false;
            console.log(`El libro "${this.titulo}" ha sido prestado.`);
        } else {
            console.log(`El libro "${this.titulo}" no está disponible.`);
        }
    }

    devolver() {
        if (!this.disponibilidad) {
            this.disponibilidad = true;
            console.log(`El libro "${this.titulo}" ha sido devuelto.`);
        } else {
            console.log(`El libro "${this.titulo}" ya está disponible.`);
        }
    }
}
