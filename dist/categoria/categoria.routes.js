import { Router } from 'express';
import { findAll, findOne, add, update, remove, sanitizeCategoriaInput } from './categoria.controler.js';
import { verifyToken } from '../auth/auth.controler.js';
export const categoriaRouter = Router();
categoriaRouter.get('/', verifyToken, findAll);
categoriaRouter.get('/:idCategoria', verifyToken, findOne);
categoriaRouter.post('/', sanitizeCategoriaInput, verifyToken, add);
categoriaRouter.put('/:idCategoria', sanitizeCategoriaInput, verifyToken, update);
categoriaRouter.delete('/:idCategoria', verifyToken, remove);
//# sourceMappingURL=categoria.routes.js.map