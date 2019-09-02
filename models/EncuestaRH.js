/**
 * Preguntas Encuesta RH
 * 
 * 
1. ¿Cómo consideras el servicio que ofrece SOLVENTO a tu empresa?
Excelente
Bueno
Regular
Malo
Justificacion Explica tu respuesta:

2. ¿Recomendarías a SOLVENTO con otra empresa?
  R: Si/No

¿Consideras que solvento constituye un valor agregado a tu organización?
Si/No

¿Cómo podríamos mejorar nuestro servicio?
 */

const {Schema, model} = require('mongoose')

const encuestaSchema = new Schema({
  folioEmpresa:String,
  enum:['EXCELENTE', 'BUENO', 'REGULAR', 'MALO'],
  respuesta1_justi: String, 
  respuesta2: Boolean,
  respuesta3: Boolean,
  respuesta4: String
},{
  timestamps:true
})

module.exports = model('EncuestaRH', encuestaSchema)