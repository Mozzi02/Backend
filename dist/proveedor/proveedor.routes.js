import { Router } from 'express';
import { sanitizeProveedorInput, findAll, findOne, add, update, remove, findSome } from './proveedor.controler.js';
export const proveedorRouter = Router();
proveedorRouter.get('/', findAll);
proveedorRouter.get('/:idProveedor', findOne);
proveedorRouter.get('/buscar/:razonSocial', findSome);
proveedorRouter.post('/', sanitizeProveedorInput, add);
proveedorRouter.put('/:idProveedor', sanitizeProveedorInput, update);
proveedorRouter.delete('/:idProveedor', remove);
//# sourceMappingURL=proveedor.routes.js.map