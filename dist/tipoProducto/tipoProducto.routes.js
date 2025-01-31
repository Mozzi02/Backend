import { Router } from 'express';
import { sanitizeTipoProductoInput, findAll, findOne, add, update, remove } from './tipoProducto.controler.js';
import { verifyToken } from '../auth/auth.controler.js';
export const tipoProductoRouter = Router();
tipoProductoRouter.get('/', verifyToken, findAll);
tipoProductoRouter.get('/:idTipo', verifyToken, findOne);
tipoProductoRouter.post('/', sanitizeTipoProductoInput, verifyToken, add);
tipoProductoRouter.put('/:idTipo', sanitizeTipoProductoInput, verifyToken, update);
tipoProductoRouter.delete('/:idTipo', verifyToken, remove);
//# sourceMappingURL=tipoProducto.routes.js.map