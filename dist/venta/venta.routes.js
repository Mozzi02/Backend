import { Router } from 'express';
import { sanitizeVentaInput, findAll, findOne, add, update, remove } from './venta.controler.js';
export const ventaRoutes = Router();
ventaRoutes.get('/', findAll);
ventaRoutes.get('/:idVenta', findOne);
ventaRoutes.post('/', sanitizeVentaInput, add);
ventaRoutes.put('/:idVenta', sanitizeVentaInput, update);
ventaRoutes.patch('/:idVenta', sanitizeVentaInput, update);
ventaRoutes.delete('/:idVenta', remove);
//# sourceMappingURL=venta.routes.js.map