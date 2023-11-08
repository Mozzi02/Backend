import { Router } from 'express';
import { findAll, findOne, add, update, remove } from './tipoProducto.controler.js';
export const tipoProductoRouter = Router();
tipoProductoRouter.get('/', findAll);
tipoProductoRouter.get('/:idProducto', findOne);
tipoProductoRouter.post('/', add);
tipoProductoRouter.put('/:idProducto', update);
tipoProductoRouter.delete('/:idProducto', remove);
//# sourceMappingURL=tipoProducto.routes.js.map