/**
 * Preguntas Encuesta RH
 * 
 * 
1. ¿Cómo consideras el servicio que ofrece SOLVENTO a tu empresa?
Excelente
Bueno
Regular
Malo
2.Justificacion Explica tu respuesta:

3. ¿Recomendarías a SOLVENTO con otra empresa?
  R: Si/No

4.¿Consideras que solvento constituye un valor agregado a tu organización?
Si/No

5.¿Cómo podríamos mejorar nuestro servicio?
 */

const {Schema, model} = require('mongoose')

const encuestaSchema = new Schema({
  folioEmpresa:String,
  respuesta1: String, 
  respuesta2_justi: String,
  respuesta3: String,
  respuesta4: String,
  respuesta5: String,
  latitude: Number,
  longitude: Number
},{
  timestamps:true
})

module.exports = model('EncuestaRH', encuestaSchema)