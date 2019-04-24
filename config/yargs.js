const configDescription = {
    description:{
        alias: 'd',
        require: true
    }
}

const configComplete= {
    description:{
        alias: 'd',
        require: true
    },
    completado:{
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
            .command('crear', 'comando para crear una tarea', configDescription)
            .command('actualizar', 'comando para actualizar una tarea, que está por hacer', configComplete)
            .command('borrar','Comando que borra una tarea', configDescription)
            .help()
            .argv;

module.exports = {
    argv
}