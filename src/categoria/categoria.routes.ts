import { Router } from 'express';
import { findAll, findOne, add, update, remove } from './categoria.controler.js';


export const categoriaRouter = Router();


categoriaRouter.get('/', findAll);
categoriaRouter.get('/:idCategoria', findOne);
categoriaRouter.post('/', add);
categoriaRouter.put('/:idCategoria', update);
categoriaRouter.delete('/:idCategoria', remove);