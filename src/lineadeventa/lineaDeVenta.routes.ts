import { Router } from 'express';
import { sanitizeLineaInput, findAll, findOne, findSome, add, update, remove } from './lineaDeVenta.controler.js';


export const lineaDeVentaRoutes = Router();


lineaDeVentaRoutes.get('/', findAll);
lineaDeVentaRoutes.get('/:idLineaVenta', findOne);
lineaDeVentaRoutes.get('/venta/:idVenta', findSome);
lineaDeVentaRoutes.post('/', sanitizeLineaInput, add);
lineaDeVentaRoutes.put('/:idLineaVenta', sanitizeLineaInput, update);
lineaDeVentaRoutes.patch('/:idLineaVenta', sanitizeLineaInput, update);
lineaDeVentaRoutes.delete('/:idLineaVenta', remove);