// autor.js - Juan Carlos Mota George - 22-SISN-2-021

export class Autor {
    constructor(nombre, nacionalidad) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }

    informacion() {
        return `${this.nombre}, de nacionalidad ${this.nacionalidad}.`;
    }
}  