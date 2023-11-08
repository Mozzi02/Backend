import { Router } from 'express';
import { findAll, findOne, add, update, remove } from './cliente.controler.js';


export const clienteRoutes = Router();


clienteRoutes.get('/', findAll);
clienteRoutes.get('/:idCliente', findOne);
clienteRoutes.post('/', add);
clienteRoutes.put('/:idCliente', update);
clienteRoutes.patch('/:idCliente', update);
clienteRoutes.delete('/:idCliente', remove);