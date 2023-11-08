import { Router } from 'express';
import { findAll, findOne, add, update, remove } from './lineaDeVenta.controler.js';


export const lineaDeVentaRoutes = Router();


lineaDeVentaRoutes.get('/', findAll);
lineaDeVentaRoutes.get('/:idLineaVenta', findOne);
lineaDeVentaRoutes.post('/', add);
lineaDeVentaRoutes.put('/:idLineaVenta', update);
lineaDeVentaRoutes.patch('/:idLineaVenta', update);
lineaDeVentaRoutes.delete('/:idLineaVenta', remove);