class SystemDATA{
    autores=[]
    crearAutor(nombre, numeroLibros, fechaNacimiento, activo, libros){
        var autor = new Autor(nombre, numeroLibros, fechaNacimiento, activo, libros)
        this.autores.push(autor)
    }
    mostrarAutores(){
        var i = 0
        for (let autor of this.autores) {
            console.log(i + 1)
            console.log(autor);
        }
    }
    actualizarNombreAutor(index,nombre){
        const a = this.autores[index - 1]
        a.nombre = nombre
    }
    actualizarNumeroLibrosAutor(index,numero){
        const a = this.autores[index - 1]
        a.numeroLibros = numero
    }
    actualizarFechaNacimientoAutor(index,fecha){
        const a = this.autores[index - 1]
        a.fechaNacimiento = fecha
    }
    actualizarActivoAutor(index,activo){
        const a = this.autores[index - 1]
        a.activo = activo
    }
    eliminarAutor(index){
        this.autores.splice(index - 1, 1)
    }
    agregarLibro(indexA,nombre, numeroPaginas, fechaPublicacion, editorial, genero){
        const libro = new Libro(nombre,numeroPaginas,fechaPublicacion,editorial,genero)
        var a = this.autores[indexA].libros.push(libro)
    }
    mostrarLibros(index){
        for (let autor of this.autores) {
            for(let libro of autor.libros){
                console.log(i + 1)
                console.log(libro);
            }

        }
    }
    actualizarNombreLibro(indexA, indexL, nombre){
        const libro = this.autores[indexA].libros[indexL]
        libro.nombre = nombre
    }
    actualizarNumLibro(indexA, indexL, numero){
        const libro = this.autores[indexA].libros[indexL]
        libro.numeroPaginas = numero
    }
    actualizarFechaLibro(indexA, indexL, fecha){
        const libro = this.autores[indexA].libros[indexL]
        libro.fechaPublicacion = fecha
    }
    actualizarEditorialLibro(indexA, indexL, editorial){
        const libro = this.autores[indexA].libros[indexL]
        libro.editorial = editorial
    }
    actualizarGeneroLibro(indexA, indexL, genero){
        const libro = this.autores[indexA].libros[indexL]
        libro.genero = genero
    }
}
class Libro {
    constructor(nombre, numeroPaginas, fechaPublicacion, editorial, genero) {
        this.nombre = nombre
        this.numeroPaginas = numeroPaginas
        this.fechaPublicacion = fechaPublicacion
        this.editorial = editorial
        this.genero = genero
    }
}
class Autor {
    constructor(nombre, numeroLibros, fechaNacimiento, activo, libros) {
        this.nombre = nombre
        this.numeroLibros = numeroLibros
        this.fechaNacimiento = fechaNacimiento
        this.activo = activo
        this.libros = libros
    }
}
const system = new SystemDATA()
system.crearAutor("xd","21","dasd","dasd","dsad")
system.mostrarAutores()
system.actualizarNombreAutor(1,"asd")
system.mostrarAutores()