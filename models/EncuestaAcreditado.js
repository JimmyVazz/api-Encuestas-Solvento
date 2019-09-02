/**
 * Preguntas Encuesta Acreditados

El tiempo del proceso de tu crédito con SOLVENTO fue:
1. Rápido
2. Moderado
3. Lento

¿Consideras que el trámite de tu crédito fue sencillo?
Si/No
¿Porqué?

¿Recomendarías a SOLVENTO con un compañero de trabajo?
Si/No
 * 
 */

const {Schema, model} = require('mongoose')

const encuestaSchema = new Schema({
  folioCliente: Number,
  respuesta1: String,
  respuesta2: String, 
  respuesta3_justi: String,
  respuesta4: String
},{
  timestamps:true
})
module.exports = model('EncuestaAcreditado', encuestaSchema)