import { Router } from 'express';
import { sanitizeVentaInput, findAll, findOne, add, update, remove } from './venta.controler.js';
import { verifyToken } from '../auth/auth.controler.js';

export const ventaRoutes = Router();


ventaRoutes.get('/', verifyToken, findAll);
ventaRoutes.get('/:idVenta', verifyToken, findOne);
ventaRoutes.post('/', sanitizeVentaInput, verifyToken, add);
ventaRoutes.put('/:idVenta', sanitizeVentaInput, verifyToken, update);
ventaRoutes.patch('/:idVenta', sanitizeVentaInput, verifyToken, update);
ventaRoutes.delete('/:idVenta', verifyToken, remove);