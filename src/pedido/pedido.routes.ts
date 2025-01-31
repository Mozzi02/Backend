import { Router } from 'express';
import { sanitizePedidoInput, findAll, findOne, add, update, remove } from './pedido.controler.js';
import { verifyToken, isAdmin } from '../auth/auth.controler.js';

export const pedidoRoutes = Router();


pedidoRoutes.get('/', verifyToken, isAdmin, findAll);
pedidoRoutes.get('/:idPedido',  verifyToken, isAdmin, findOne);
pedidoRoutes.post('/', sanitizePedidoInput,  verifyToken, isAdmin, add);
pedidoRoutes.put('/:idPedido', sanitizePedidoInput,  verifyToken, isAdmin, update);
pedidoRoutes.patch('/:idPedido', sanitizePedidoInput,  verifyToken, isAdmin, update);
pedidoRoutes.delete('/:idPedido',  verifyToken, isAdmin, remove);