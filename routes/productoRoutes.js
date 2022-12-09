import express from 'Express';
import { get } from 'mongoose';

import {
    productos,
    deleteProductos,
    getProducto,
    getProductos,
    createProductos,
    updateProductos
}  from '../controllers/productoController.js';

const router = express.Router();

router.get('/productosModel', productos);

// Rutas Gestión Producto
router.get('/get', getProductos);
router.get('/get/:id', getProducto);
router.post('/create', createProductos);
router.put('/update/:id', updateProductos);
router.delete('/delete/:id', deleteProductos);

export default router;
