import { Router } from 'express';
import { sanitizeProductoInput, findAll, findOne, add, update, remove, findSome } from './producto.controler.js';


export const productoRouter = Router();


productoRouter.get('/', findAll);
productoRouter.get('/:idProducto', findOne);
productoRouter.get('/buscar/:descripcion', findSome);
productoRouter.post('/', sanitizeProductoInput, add);
productoRouter.put('/:idProducto', sanitizeProductoInput, update);
productoRouter.patch('/:idProducto', sanitizeProductoInput, update);
productoRouter.delete('/:idProducto', remove);