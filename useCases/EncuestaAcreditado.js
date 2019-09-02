//Import del modelo de la BD
const EncuestaAcreditado = require('../models/EncuestaAcreditado')
//Funcion que crea un nuevo documento en la BD
function createEncuesta(folioCliente, respuesta1, respuesta2, respuesta3_justi, respuesta4){
    const encuesta = new EncuestaAcreditado({
        folioCliente, respuesta1, respuesta2, respuesta3_justi, respuesta4
    }) 

    return encuesta.save()
}
//Funcion que retorna todos los elementos
function getAll(){
    return EncuestaAcreditado.find().exec()
}

function getUnique(id){
    return EncuestaAcreditado.findById(id).exec()
    
}

//Exportamos las funciones
module.exports = {
    createEncuesta,
    getAll,
    getUnique
}