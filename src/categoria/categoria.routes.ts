import { Router } from 'express';
import { findAll, findOne, add, update, remove, sanitizeCategoriaInput } from './categoria.controler.js';
import { verifyToken } from '../auth/auth.controler.js';


export const categoriaRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Categoria:
 *       type: object
 *       required:
 *         - id
 *         - descripcion
 *       properties:
 *         id:
 *           type: integer
 *           description: El id autogenerado de la categoria
 *         descripcion:
 *           type: string
 *           description: La descripcion de la categoria
 *       example:
 *         id: 1
 *         descripcion: Minorista
 */

/**
 * @swagger
 * tags:
 *   name: Categoria
 *   description: La API que administra las Categorias
 */

/**
 * @swagger
 * /Categoria:
 *   get:
 *     summary: Devuelve todas las categorias
 *     tags: [Categoria]
 *     responses:
 *       200:
 *         description: Encuentra todas las categorias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Categoria'
 *                  
 *                 
 *  
 */
categoriaRouter.get('/', verifyToken, findAll);
categoriaRouter.get('/:idCategoria', verifyToken, findOne);
categoriaRouter.post('/', sanitizeCategoriaInput, verifyToken, add);
categoriaRouter.put('/:idCategoria', sanitizeCategoriaInput, verifyToken, update);
categoriaRouter.delete('/:idCategoria', verifyToken, remove);