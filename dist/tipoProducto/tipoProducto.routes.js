import { Router } from 'express';
import { sanitizeTipoProductoInput, findAll, findOne, add, update, remove } from './tipoProducto.controler.js';
export const tipoProductoRouter = Router();
tipoProductoRouter.get('/', findAll);
tipoProductoRouter.get('/:idTipo', findOne);
tipoProductoRouter.post('/', sanitizeTipoProductoInput, add);
tipoProductoRouter.put('/:idTipo', sanitizeTipoProductoInput, update);
tipoProductoRouter.delete('/:idTipo', remove);
//# sourceMappingURL=tipoProducto.routes.js.map