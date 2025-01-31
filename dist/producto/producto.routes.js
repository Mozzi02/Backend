import { Router } from 'express';
import { sanitizeProductoInput, findAll, findOne, add, update, remove, findSome } from './producto.controler.js';
import { verifyToken } from '../auth/auth.controler.js';
export const productoRouter = Router();
productoRouter.get('/', verifyToken, findAll);
productoRouter.get('/:idProducto', verifyToken, findOne);
productoRouter.get('/buscar/:descripcion', verifyToken, findSome);
productoRouter.post('/', sanitizeProductoInput, verifyToken, add);
productoRouter.put('/:idProducto', sanitizeProductoInput, verifyToken, update);
productoRouter.patch('/:idProducto', sanitizeProductoInput, verifyToken, update);
productoRouter.delete('/:idProducto', verifyToken, remove);
//# sourceMappingURL=producto.routes.js.map