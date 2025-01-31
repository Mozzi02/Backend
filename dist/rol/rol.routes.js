import { Router } from 'express';
import { sanitizeRolInput, findAll, findOne, add, update, remove } from './rol.controler.js';
import { verifyToken, isAdmin } from '../auth/auth.controler.js';
export const rolRouter = Router();
rolRouter.get('/', verifyToken, isAdmin, findAll);
rolRouter.get('/:idRol', verifyToken, isAdmin, findOne);
rolRouter.post('/', sanitizeRolInput, verifyToken, isAdmin, add);
rolRouter.put('/:idRol', sanitizeRolInput, verifyToken, isAdmin, update);
rolRouter.delete('/:idRol', verifyToken, isAdmin, remove);
//# sourceMappingURL=rol.routes.js.map