import { Router } from 'express';
import { findAll, findOne, add, update, remove } from './venta.controler.js';


export const ventaRoutes = Router();


ventaRoutes.get('/', findAll);
ventaRoutes.get('/:idVenta', findOne);
ventaRoutes.post('/', add);
ventaRoutes.put('/:idVenta', update);
ventaRoutes.patch('/:idVenta', update);
ventaRoutes.delete('/:idVenta', remove);