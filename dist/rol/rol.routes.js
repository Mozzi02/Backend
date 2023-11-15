import { Router } from 'express';
import { findAll, findOne, add, update, remove } from './rol.controler.js';
export const rolRouter = Router();
rolRouter.get('/', findAll);
rolRouter.get('/:idRol', findOne);
rolRouter.post('/', add);
rolRouter.put('/:idRol', update);
rolRouter.delete('/:idRol', remove);
//# sourceMappingURL=rol.routes.js.map