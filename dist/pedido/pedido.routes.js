import { Router } from 'express';
import { sanitizePedidoInput, findAll, findOne, add, update, remove } from './pedido.controler.js';
export const pedidoRoutes = Router();
pedidoRoutes.get('/', findAll);
pedidoRoutes.get('/:idPedido', findOne);
pedidoRoutes.post('/', sanitizePedidoInput, add);
pedidoRoutes.put('/:idPedido', sanitizePedidoInput, update);
pedidoRoutes.patch('/:idPedido', sanitizePedidoInput, update);
pedidoRoutes.delete('/:idPedido', remove);
//# sourceMappingURL=pedido.routes.js.map