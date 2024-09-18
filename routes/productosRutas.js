
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');


//rutas del crud

router.post('/',productoController.agregarProductos);
router.get('/',productoController.mostrarProductos);
router.get('/:id',productoController.BuscarProducto);
router.put('/:id',productoController.modificarProductos);
/*router.patch('/:id',productoController.editarProducto);*/
router.delete('/:id',productoController.eliminarProductos);



module.exports = router;

