import { Router } from 'express';
import { sanitizeProductoInput, findAll, findOne, add, update, remove } from './producto.controler.js';


export const productoRouter = Router();


productoRouter.get('/', findAll);
productoRouter.get('/:idProducto', findOne);
productoRouter.post('/', sanitizeProductoInput, add);
productoRouter.put('/:idProducto', sanitizeProductoInput, update);
productoRouter.patch('/:idProducto', sanitizeProductoInput, update);
productoRouter.delete('/:idProducto', remove);