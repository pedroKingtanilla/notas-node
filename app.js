//const argv = require('yargs').argv
const argv = require('./config/yargs').argv
const {crear, cargarDB, actualizar, borrar} = require('./tareas/todo')
const color = require('colors')

let comando = argv._[0];

switch(comando){
    case 'crear':
        crear(argv.description);
        console.log(`comando crear OK`.green);
    break;
    case 'listar':
        let listado = cargarDB();
        console.log('============Listado de tareas=================='.green);
        for( let tarea of listado){           
            console.log(tarea.description);
            console.log('Estado:', tarea.completado);
        }
        console.log('==============================================='.green);
        
    break;
    case 'actualizar':
        actualizar(argv.description, argv.completado)

        console.log('actualiza una tarea');
    break;
    case 'borrar':
        let respuesta = borrar(argv.description)

        console.log('borrado: ', respuesta.green);
    break;
    default:
        console.log('comando no es reconocido.')
}