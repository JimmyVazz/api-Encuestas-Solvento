const express = require('express');
const router  = express.Router();
const encuesta = require('../useCases/EncuestaAcreditado')
const encuestaRH = require('../useCases/EncuestaRH')
/* GET home page */
router.get('/', async(req, res, next) => {
  const data = await encuesta.getAll()
  res.json({
    data: data
  })
})

router.post('/encuesta', async(req, res) => {
  const {
    folioCliente, 
    respuesta1, 
    respuesta2, 
    respuesta3_justi,
    respuesta4
  } = req.body
  console.log(req.body)
  const newEncuesta = await encuesta.createEncuesta(folioCliente, respuesta1, respuesta2, respuesta3_justi, respuesta4)
  res.json({
    succes: true,
    message: "Encuesta enviada",
    data: {
      encuesta: newEncuesta
    }
  })
})

router.get('/rh', async(req, res) => {
  const data = await encuestaRH.getAll()
  res.json({
    data: data
  })
})

router.post('/rh', async(req, res) => {
  const {
    folioEmpresa, 
    respuesta1, 
    respuesta2_justi, 
    respuesta3,
    respuesta4,
    respuesta5
  } = req.body
  console.log(req.body)
  const newEncuesta = await encuestaRH.createEncuesta(folioEmpresa, respuesta1, respuesta2_justi, respuesta3, respuesta4, respuesta5)
  res.json({
    succes: true,
    message: "Encuesta enviada",
    data: {
      encuesta: newEncuesta
    }
  })
})



module.exports = router;
