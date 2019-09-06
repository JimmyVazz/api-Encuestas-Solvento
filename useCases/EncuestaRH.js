//Import del modelo de la BD
const EncuestaRH = require('../models/EncuestaRH')
//Funcion que crea un nuevo documento en la BD
function createEncuesta(folioEmpresa, respuesta1, respuesta2_justi, respuesta3, respuesta4, respuesta5, latitude, longitude){
    const encuesta = new EncuestaRH({
        folioEmpresa, respuesta1, respuesta2_justi, respuesta3, respuesta4, respuesta5, latitude, longitude
    }) 

    return encuesta.save()
}
//Funcion que retorna todos los elementos
function getAll(){
    return EncuestaRH.find().exec()
}

function getUnique(id){
    return EncuestaRH.findById(id).exec()
    
}

//Exportamos las funciones
module.exports = {
    createEncuesta,
    getAll,
    getUnique
}