import { Router } from 'express';
import { sanitizeClienteInput, findAll, findOne, add, update, remove } from './cliente.controler.js';
import { verifyToken } from '../auth/auth.controler.js';

export const clienteRoutes = Router();


clienteRoutes.get('/', verifyToken, findAll);
clienteRoutes.get('/:idCliente', verifyToken, findOne);
clienteRoutes.post('/', sanitizeClienteInput, verifyToken, add);
clienteRoutes.put('/:idCliente', sanitizeClienteInput, verifyToken, update);
clienteRoutes.patch('/:idCliente', sanitizeClienteInput, verifyToken, update);
clienteRoutes.delete('/:idCliente', verifyToken, remove);