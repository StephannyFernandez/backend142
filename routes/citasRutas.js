const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');


//rutas del crud

router.post('/',citaController.agregarCitas);
router.get('/',citaController.mostrarCitas);
router.get('/:id',citaController.mostrarCitas);
//router.put('/:id',citaController.modificarCitas);
router.patch('/:id',citaController.editarCitas);
router.delete('/:id',citaController.eliminarCitas);



module.exports = router;