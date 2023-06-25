import inquirer from 'inquirer';

class SystemDATA {
    autores = []
    id = 0
    crearAutor(nombre, numeroLibros, fechaNacimiento, estado, libros) {
        var autor = new Autor(nombre, numeroLibros, fechaNacimiento, estado, libros)
        this.id++
        this.autores.push(autor)
        this.mostrarAutores()
    }
    mostrarAutores() {
        var i = 0
        for (let autor1 of this.autores) {
            console.log(i + 1)
            console.log(autor1);
        }

    }
    actualizarNombreAutor(index, nombre) {
        const a = this.autores[index - 1]
        a.nombre = nombre
    }
    actualizarFechaNacimientoAutor(index, fecha) {
        const a = this.autores[index - 1]
        a.fechaNacimiento = fecha
    }
    actualizarActivoAutor(index, activo) {
        const a = this.autores[index - 1]
        a.activo = activo
    }
    eliminarAutor(index) {
        this.autores.splice(index - 1, 1)
    }
    agregarLibro(indexA, libro) {
        //const libro = new Libro(nombre, numeroPaginas, fechaPublicacion, editorial, genero)
        var a = this.autores[indexA - 1].libros.push(libro)
        this.autores[indexA - 1].numeroLibros += 1
    }
    crearLibro(nombre, numeroPaginas, fechaPublicacion, editorial, genero) {
        const libro = new Libro(nombre, numeroPaginas, fechaPublicacion, editorial, genero)
        return libro
    }
    mostrarLibros(index) {
        let autor = this.autores[index - 1]
        var i = 0
        for (let libro of autor.libros) {
            console.log(i + 1);
            console.log(libro);
            i++;
        }
    }
    eliminarLibro(index, numLibro){
        let autor = this.autores[index - 1];
        autor.libros.splice(numLibro,1)
    }
    actualizarNombreLibro(indexA, indexL, nombre) {
        const libro = this.autores[indexA - 1].libros[indexL - 1]
        libro.titulo = nombre
    }
    actualizarNumLibro(indexA, indexL, numero) {
        const libro = this.autores[indexA - 1].libros[indexL - 1]
        libro.numeroPaginas = numero
    }
    actualizarFechaLibro(indexA, indexL, fecha) {
        const libro = this.autores[indexA - 1].libros[indexL - 1]
        libro.fechaPublicacion = fecha
    }
    actualizarEditorialLibro(indexA, indexL, editorial) {
        const libro = this.autores[indexA - 1].libros[indexL - 1]
        libro.editorial = editorial
    }
    actualizarGeneroLibro(indexA, indexL, genero) {
        const libro = this.autores[indexA - 1].libros[indexL - 1]
        libro.genero = genero
    }
}

class Libro {
    constructor(titulo, numeroPaginas, fechaPublicacion, editorial, genero) {
        this.titulo = titulo
        this.numeroPaginas = numeroPaginas
        this.fechaPublicacion = fechaPublicacion
        this.editorial = editorial
        this.genero = genero
    }
}

class Autor {
    libros = []
    constructor(nombre, numeroLibros, fechaNacimiento, activo, libros) {
        this.nombre = nombre
        this.numeroLibros = numeroLibros
        this.fechaNacimiento = fechaNacimiento
        this.activo = activo
        this.libros = libros
    }
}
let sd = new SystemDATA()

const menuPrincipal = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Seleccione una opción: ',
        choices: [
            '- Crear Autor',
            '- Mostrar autores',
            '- Actualizar Autor',
            '- Eliminar Autor',
            'Salir'
        ]
    }
]
const menuActualizacionAutor = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Seleccione una opción: ',
        choices: [
            '- Actualizar nombre',
            '- Actualizar fecha nacimiento',
            '- Actualizar estado',
            '- Agregar libro',
            '- Eliminar libro',
            '- Actualizar libro',
            'Atras'
        ]
    }
]
const menuActualizacionLibro = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Seleccione una opción: ',
        choices: [
            '- Actualizar titulo',
            '- Actualizar numero paginas',
            '- Actualizar fecha de publicación',
            '- Actualizar editorial',
            '- Actualizar genero',
            'Atras'
        ]
    }
]
const menuCreacionAutor = [
    {
        type: 'input',
        name: 'nombreAutor',
        message: 'Ingrese el nombre del autor'
    },
    {
        type: 'input',
        name: 'numeroLibros',
        message: 'Ingrese el número de libros del autor'
    },
    {
        type: 'input',
        name: 'fechaNacimiento',
        message: 'Ingrese la fecha de nacimiento del autor'
    },
    {
        type: 'list',
        name: 'estado',
        message: 'Elija el estado',
        choices: [
            'Activo: aun escribe libros',
            'Retirado: ya no escribe ibros',
        ]
    },
]
const menuCreacionLibro = [
    {
        type: 'input',
        name: 'tituloLibro',
        message: 'Ingrese el titulo del libro'
    },
    {
        type: 'input',
        name: 'numeroPaginas',
        message: 'Ingrese el número de paginas del libro'
    },
    {
        type: 'input',
        name: 'fechaPublicacion',
        message: 'Ingrese la fecha de publicacion del libro'
    },
    {
        type: 'input',
        name: 'editorial',
        message: 'Ingrese la editorial del libro'
    },
    {
        type: 'list',
        name: 'genero',
        message: 'Genero del libro: ',
        choices: [
            '1.- Drama',
            '2.- Suspenso',
            '3.- Terror',
            '4.- Romantico',
            'Salir'
        ]
    }
]
const menuEleccionAutor = [
    {
        type: 'input',
        name: 'numeroAutor',
        message: 'Ingrese el numero del autor'
    },
]
const menuEleccionLibro = [
    {
        type: 'input',
        name: 'numeroLibro',
        message: 'Ingrese el numero del libro'
    },
]
const nuevoNombreAutor = [
    {
        type: 'input',
        name: 'nombreNuevo',
        message: 'Ingrese el nuevo nombre del autor'
    }
]
const nuevaFechaAutor = [
    {
        type: 'input',
        name: 'fechaNuevaA',
        message: 'Ingrese la nueva fecha de nacimiento'
    }
]
const nuevoTituloLibro = [
    {
        type: 'input',
        name: 'tituloNuevo',
        message: 'Ingrese el nuevo titulo del libro'
    }
]
const nuevoNumeroPaginasLibro = [
    {
        type: 'input',
        name: 'numPagNuevo',
        message: 'Ingrese el nuevo numero de paginas del libro'
    }
]
const nuevaFechaLibro = [
    {
        type: 'input',
        name: 'fechaNuevaL',
        message: 'Ingrese la nueva fecha de publicacion'
    }
]
const nuevaEditorial = [
    {
        type: 'input',
        name: 'nuevaEditorial',
        message: 'Ingrese la nueva editorial'
    }
]
const nuevoGenero = [
    {
        type: 'list',
        name: 'genero',
        message: 'Genero nuevo del libro: ',
        choices: [
            '1.- Drama',
            '2.- Suspenso',
            '3.- Terror',
            '4.- Romantico',
            'Salir'
        ]
    }
]
async function actualizarNombre(){
    var respuesta = await inquirer.prompt(nuevoNombreAutor);
    return respuesta.nombreNuevo.toString()
}
async function actualizarFechaN(){
    var respuesta = await inquirer.prompt(nuevaFechaAutor);
    var fechaA = new Date(respuesta.fechaNuevaA.toString())
    return fechaA
}
const nuevoEstado = [
    {
        type: 'list',
        name: 'estado',
        message: 'Elija el nuevo estado',
        choices: [
            'Activo: aun escribe libros',
            'Retirado: ya no escribe ibros',
        ]
    }
]
async function actualizarEstado(){
    var respuesta = await inquirer.prompt(nuevoEstado)
    return respuesta.estado.toString()
}
async function actualizarTitulo(){
    var respuesta = await inquirer.prompt(nuevoTituloLibro);
    return respuesta.tituloNuevo.toString()
}
async function actualizarNumeroPaginas(){
    var respuesta = await inquirer.prompt(nuevoNumeroPaginasLibro);
    return parseInt(respuesta.tituloNuevo.toString());
}
async function actualizarFechaL(){
    var respuesta = await inquirer.prompt(nuevaFechaLibro);
    return new Date(respuesta.fechaNuevaL.toString())
}
async function actualizarEditorial(){
    var respuesta = await inquirer.prompt(nuevaEditorial);
    return respuesta.nuevaEditorial.toString();
}
async function actualizarGenero(){
    var respuesta = await inquirer.prompt(nuevoGenero);
    return respuesta.genero.toString();
}
async function menuAA(index) {
    try {
        await inquirer.prompt(menuActualizacionAutor).then(async respuestas => {
            const respuesta = respuestas.opcion;
            switch (respuesta) {
                case ('- Actualizar nombre'):
                    var nuevoNombre = await actualizarNombre()
                    sd.actualizarNombreAutor(index, nuevoNombre)
                    console.log('Actualización de nombre de autor exitosa')
                    break;
                case ("- Actualizar fecha nacimiento"):
                    var nuevaFecha = await actualizarFechaN()
                    sd.actualizarFechaNacimientoAutor(index, nuevaFecha)
                    console.log('Actualización de nacimiento de autor exitosa')
                    break;
                case ("- Actualizar estado"):
                    var estado = false
                    var cont = await actualizarEstado()
                    if(cont === 'Activo: aun escribe libros'){
                        estado = true
                    }else{
                        estado = false
                    }
                    sd.actualizarActivoAutor(index, estado)
                    console.log('Actualización de estado de autor exitosa')
                    break;
                case ("- Agregar libro"):
                    let libro = await creacionLibro()
                    sd.agregarLibro(index, libro)
                    console.log("Libro agregado exitosamente")
                    break;
                case ("- Eliminar libro"):
                    sd.mostrarLibros(index);
                    var numLibro = await eleccionLibro();
                    sd.eliminarLibro(index, numLibro-1);
                    console.log("Libro eliminado exitosamente")
                    break;
                case ("- Actualizar libro"):
                    sd.mostrarLibros(index)
                    var numLibro1 = await eleccionLibro();
                    await menuAAL(index, numLibro1 - 1)
                    break;
                case ("Atras"):
                    main()
                    break;
            }
        })

    } catch (e) {
        console.error(e)
    }
}
async function menuAAL(index, numLibro) {
    try {
        await inquirer.prompt(menuActualizacionLibro).then(async respuestas => {
            const respuesta = respuestas.opcion;
            switch (respuesta) {
                case ('- Actualizar titulo'):
                    var nuevoTitulo = await actualizarTitulo()
                    sd.actualizarNombreLibro(index,numLibro,nuevoTitulo)
                    console.log('Actualización de titulo de libro exitosa')
                    break;
                case ("- Actualizar numero paginas"):
                    var numPaginas = await actualizarNumeroPaginas()
                    sd.actualizarNumLibro(index, numLibro, numPaginas)
                    console.log('Actualización de numero de paginas de libro exitosa')
                    break;
                case ("- Actualizar fecha de publicación"):
                    var fechaL = await actualizarFechaL()
                    sd.actualizarFechaLibro(index, numLibro, fechaL)
                    console.log('Actualización de fecha de publicacion de libro exitosa')
                    break;
                case ("- Actualizar editorial"):
                    var editorial = await actualizarEditorial()
                    sd.actualizarEditorialLibro(index, numLibro, editorial)
                    console.log('Actualización de editorial de libro exitosa')
                    break;
                case ("- Actualizar genero"):
                    var genero = await actualizarGenero();
                    sd.actualizarGeneroLibro(index, numLibro, genero);
                    console.log('Actualización de genero de libro exitosa')
                    break;
                case ("- Atras"):
                    menuAA(index)
                    break;
            }
        })

    } catch (e) {
        console.error(e)
    }
}
async function eleccionAutor(){
    const respuesta = await inquirer.prompt(menuEleccionAutor);
    return parseInt(respuesta.numeroAutor);
}
async function eleccionLibro(){
    const respuesta = await inquirer.prompt(menuEleccionLibro);
    return parseInt(respuesta.numeroLibro);
}
async function creacionLibro(numLibro) {
    console.log(" Creacion libro " + (numLibro + 1))
    const respuestas = await inquirer.prompt(menuCreacionLibro);
        const titulo = respuestas.tituloLibro
        const numeroPaginas = respuestas.numeroPaginas
        const fechaPublicacion = respuestas.fechaPublicacion
        const editorial = respuestas.editorial
        const genero = respuestas.genero
        return sd.crearLibro(titulo, numeroPaginas, fechaPublicacion, editorial, genero)
}
/*async function creacionLibro(numLibro) {
  console.log("Creación libro " + (numLibro + 1));

  const respuestas = await inquirer.prompt(menuCreacionLibro);
  const titulo = respuestas.tituloLibro;
  const numeroPaginas = respuestas.numeroPaginas;
  const fechaPublicacion = respuestas.fechaPublicacion;
  const editorial = respuestas.editorial;
  const genero = respuestas.genero;

  return sd.crearLibro(titulo, numeroPaginas, fechaPublicacion, editorial, genero);
}*/
async function creacionAutor() {
    let respuestas = await inquirer.prompt(menuCreacionAutor)
    const nombre = respuestas.nombreAutor.toString()
    const numeroLibros = parseInt(respuestas.numeroLibros)
    const fechaNacimiento = new Date(respuestas.fechaNacimiento)
    let estado = false
    if(respuestas.estado === 'Activo: aun escribe libros'){
        estado = true
    }else{
        estado = false
    }
    let libros = []
    for (let i = 0; i < numeroLibros; i++) {
        const libro = await creacionLibro(i)
        libros.push(libro)
        let num = i + 1
        console.log("Creación de libro " + num + " exitosa")
    }
    sd.crearAutor(nombre, numeroLibros, fechaNacimiento, estado, libros)
    console.log("Creación de autor " + sd.id + " exitosa")
}

async function main() {
    try {
        await inquirer.prompt(menuPrincipal).then(async respuestas => {
            const respuesta = respuestas.opcion;
            switch (respuesta) {
                case ('- Crear Autor'):
                    await creacionAutor()
                    menuAA(sd.id - 1)
                    break;
                case ("- Mostrar autores"):
                    await sd.mostrarAutores()
                    main()
                    break;
                case ("- Actualizar Autor"):
                    var numA = await eleccionAutor()
                    menuAA(numA - 1)
                    break;
                case ("- Eliminar Autor"):
                    var numA1 = await eleccionAutor();
                    await sd.eliminarAutor(numA1 - 1)
                    await console.log('Eliminación exitosa de autor')
                    main()
                    break;
                case ("- Salir"):
                    process.exit()
            }
        })

    } catch (e) {
        console.error(e)
    }
}
var librosTest = []
var libro = new Libro('100 anios', '200', '1900-01-01', 'Norma','Drama')
librosTest.push(libro)
var a = new Autor("GGM",1,new Date('1900-01-01'),true,librosTest)
sd.crearAutor(a)
main()
