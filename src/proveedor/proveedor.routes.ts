import { Router } from 'express';
import { findAll, findOne, add, update, remove } from './proveedor.controler.js';


export const proveedorRouter = Router();


proveedorRouter.get('/', findAll);
proveedorRouter.get('/:idProveedor', findOne);
proveedorRouter.post('/', add);
proveedorRouter.put('/:idProveedor', update);
proveedorRouter.delete('/:idProveedor', remove);