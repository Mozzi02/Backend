import { Router } from 'express';
import { findAll, findOne, add, update, remove, sanitizeCategoriaInput } from './categoria.controler.js';
export const categoriaRouter = Router();
categoriaRouter.get('/', findAll);
categoriaRouter.get('/:idCategoria', findOne);
categoriaRouter.post('/', sanitizeCategoriaInput, add);
categoriaRouter.put('/:idCategoria', sanitizeCategoriaInput, update);
categoriaRouter.delete('/:idCategoria', remove);
//# sourceMappingURL=categoria.routes.js.map