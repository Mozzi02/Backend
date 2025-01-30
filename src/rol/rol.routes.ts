import { Router } from 'express';
import { sanitizeRolInput, findAll, findOne, add, update, remove } from './rol.controler.js';


export const rolRouter = Router();


rolRouter.get('/', findAll);
rolRouter.get('/:idRol', findOne);
rolRouter.post('/', sanitizeRolInput, add);
rolRouter.put('/:idRol', sanitizeRolInput, update);
rolRouter.delete('/:idRol', remove);