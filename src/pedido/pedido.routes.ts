import { Router } from 'express';
import { findAll, findOne, add, update, remove } from './pedido.controler.js';


export const pedidoRoutes = Router();


pedidoRoutes.get('/', findAll);
pedidoRoutes.get('/:idPedido', findOne);
pedidoRoutes.post('/', add);
pedidoRoutes.put('/:idPedido', update);
pedidoRoutes.patch('/:idPedido', update);
pedidoRoutes.delete('/:idPedido', remove);