const express = require('express');
const router  = express.Router();
const encuesta = require('../useCases/EncuestaAcreditado')
/* GET home page */
router.get('/', (req, res, next) => {
  res.json({
    name: "Jimmy",
    apepat: "Vasquez",
    apemat: "Fuentes"
  })
});

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

module.exports = router;
