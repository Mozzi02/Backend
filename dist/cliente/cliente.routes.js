import { Router } from 'express';
import { sanitizeClienteInput, findAll, findOne, add, update, remove } from './cliente.controler.js';
export const clienteRoutes = Router();
clienteRoutes.get('/', findAll);
clienteRoutes.get('/:idCliente', findOne);
clienteRoutes.post('/', sanitizeClienteInput, add);
clienteRoutes.put('/:idCliente', sanitizeClienteInput, update);
clienteRoutes.patch('/:idCliente', sanitizeClienteInput, update);
clienteRoutes.delete('/:idCliente', remove);
//# sourceMappingURL=cliente.routes.js.map