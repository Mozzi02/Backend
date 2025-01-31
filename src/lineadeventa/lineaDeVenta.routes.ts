import { Router } from 'express';
import { sanitizeLineaInput, findAll, findOne, findSome, add, update, remove } from './lineaDeVenta.controler.js';
import { verifyToken } from '../auth/auth.controler.js';

export const lineaDeVentaRoutes = Router();


lineaDeVentaRoutes.get('/', verifyToken, findAll);
lineaDeVentaRoutes.get('/:idLineaVenta', verifyToken, findOne);
lineaDeVentaRoutes.get('/venta/:idVenta', verifyToken, findSome);
lineaDeVentaRoutes.post('/', sanitizeLineaInput, verifyToken, add);
lineaDeVentaRoutes.put('/:idLineaVenta', sanitizeLineaInput, verifyToken, update);
lineaDeVentaRoutes.patch('/:idLineaVenta', sanitizeLineaInput, verifyToken, update);
lineaDeVentaRoutes.delete('/:idLineaVenta', verifyToken, remove);