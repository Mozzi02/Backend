import { Router } from 'express';
import { findAll, findOne, add, update, remove } from './tipoProducto.controler.js';
export const tipoProductoRouter = Router();
tipoProductoRouter.get('/', findAll);
tipoProductoRouter.get('/:idTipo', findOne);
tipoProductoRouter.post('/', add);
tipoProductoRouter.put('/:idTipo', update);
tipoProductoRouter.delete('/:idTipo', remove);
//# sourceMappingURL=tipoProducto.routes.js.map