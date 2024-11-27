// index.js - Juan Carlos Mota George - 22-SISN-2-021
import { Autor } from './models/autor.js'; 
import { Libro } from './models/libros.js'; 
import { Biblioteca } from './models/biblioteca.js'; 
import { agregarLibro, listarLibros, buscarPorTitulo, buscarPorAutor, listarLibrosDisponibles } from './db/crud.js';

const autor1 = new Autor("Hiro Mashima", "Japonesa");
const manga1 = new Libro("Fairy Tail (Vol. 1)", autor1, 2006);

const autor2 = new Autor("Kōhei Horikoshi", "Japonesa");
const manga2 = new Libro("Boku no Hero Academia (Vol. 1)", autor2, 2014);

const autor3 = new Autor("J.K. Rowling", "Británica");
const libro1 = new Libro("Harry Potter y la piedra filosofal", autor3, 1997);

const autor4 = new Autor("Gabriel García Márquez", "Colombiana");
const libro2 = new Libro("Cien años de soledad", autor4, 1967);
const libro3 = new Libro("Crónica de una muerte anunciada", autor4, 1981);

const autor5 = new Autor("J.K. Rowling", "Británica");
const libro4 = new Libro("Harry Potter y la piedra filosofal", autor5, 1997);

const biblioteca = new Biblioteca();

// Agregar libros
console.log("\n-- Agregando libros --\n")
agregarLibro(biblioteca, libro1);
agregarLibro(biblioteca, libro2);
agregarLibro(biblioteca, libro3);
agregarLibro(biblioteca, libro4);

// Agregar manga
agregarLibro(biblioteca, manga1);
agregarLibro(biblioteca, manga2);

// Listar todos los libros
console.log("\n-- Listando libros --\n")
listarLibros(biblioteca);

// Buscar por título
console.log("\n-- Buscar por título-- \n");
buscarPorTitulo(biblioteca, "Fairy Tail");

// Buscar por autor
console.log("\n-- Buscar por autor-- \n");
buscarPorAutor(biblioteca, "Kōhei Horikoshi");

// Listar libros disponibles
console.log("\n-- Libros disponibles --\n");
listarLibrosDisponibles(biblioteca);

// Prestar y devolver libros
console.log("\n-- Préstamo y devolución --\n");
libro1.prestar();
libro1.devolver();
libro2.prestar();
