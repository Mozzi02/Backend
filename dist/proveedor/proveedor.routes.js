import { Router } from 'express';
import { sanitizeProveedorInput, findAll, findOne, add, update, remove, findSome } from './proveedor.controler.js';
import { verifyToken, isAdmin } from '../auth/auth.controler.js';
export const proveedorRouter = Router();
proveedorRouter.get('/', verifyToken, isAdmin, findAll);
proveedorRouter.get('/:idProveedor', verifyToken, isAdmin, findOne);
proveedorRouter.get('/buscar/:razonSocial', verifyToken, isAdmin, findSome);
proveedorRouter.post('/', sanitizeProveedorInput, verifyToken, isAdmin, add);
proveedorRouter.put('/:idProveedor', sanitizeProveedorInput, verifyToken, isAdmin, update);
proveedorRouter.delete('/:idProveedor', verifyToken, isAdmin, remove);
//# sourceMappingURL=proveedor.routes.js.map