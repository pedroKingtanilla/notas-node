const fs = require('fs');
const path = './DB/';

let listadoPorHacer = [];

const crear = (description) =>{

    let contenido = {
        description,
        completado : false
    };

    cargarDB();
    listadoPorHacer.push(contenido);
    return guardar();
}

const guardar = ()=>{
    
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`${path}data.json`, data, (err) => {
        if (err){
            throw new Error(`No se pudo grabar`, err);
        }
    });
}

const cargarDB = ()=>{

    try{
        listadoPorHacer = require('../DB/data.json')
        return listadoPorHacer
    } catch(err){
        return listadoPorHacer;
    }
}

const actualizar = (description, completado)=>{

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea =>{return tarea.description === description});

    if(index >=0){
        listadoPorHacer[index].completado = completado;
        guardar();
        return true;
    }else{
        return false;
    }
}

const borrar = (description)=>{
    
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea =>{return tarea.description === description});

    if(index >=0){
        listadoPorHacer.splice(index);
        guardar();
        return true;
    }else{
        return false;
    }
}

module.exports = {
    crear,
    cargarDB,
    actualizar,
    borrar
}