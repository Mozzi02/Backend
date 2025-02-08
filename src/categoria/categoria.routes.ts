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
 *         - idCategoria
 *         - descripcion
 *       properties:
 *         idCategoria:
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
 *         description: Se encontraron todas las categorias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Categoria'
 *       500:
 *          description: Error en el servidor
 */
categoriaRouter.get('/', verifyToken, findAll);


/**
 * @swagger
 * /Categoria/{idCategoria}:
 *   get:
 *      summary: Devuelve una categoria por ID
 *      tags: [Categoria]
 *      parameters:
 *        - in: path
 *          name: idCategoria
 *          schema:
 *              type: integer
 *          required: true
 *          description: El ID de la categoria
 *      responses:
 *          200:
 *              description: Se encontró la categoria
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Categoria'
 *          
 *          500:
 *              description: Error en el servidor        
 */
categoriaRouter.get('/:idCategoria', verifyToken, findOne);


/**
 * @swagger
 * /Categoria:
 *   post:
 *     summary: Crea una nueva Categoria
 *     tags: [Categoria]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       201:
 *         description: La Categoria fue creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       500:
 *         description: Error en el servidor
 */
categoriaRouter.post('/', sanitizeCategoriaInput, verifyToken, add);


/**
 * @swagger
 * /Categoria/{idCategoria}:
 *   put:
 *     summary: Modifica una Categoria por ID
 *     tags: [Categoria]
 *     parameters:
 *       - in: path
 *         name: idCategoria
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID de la Categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       200:
 *         description: Categoria modificada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       500:
 *         description: Error en el servidor
 */
categoriaRouter.put('/:idCategoria', sanitizeCategoriaInput, verifyToken, update);


/**
 * @swagger
 * /Categoria/{idCategoria}:
 *   delete:
 *     summary: Elimina una Categoria por ID
 *     tags: [Categoria]
 *     parameters:
 *       - in: path
 *         name: idCategoria
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID de la Categoria
 *     responses:
 *       200:
 *         description: La Categoria fue eliminada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       500:
 *         description: Error en el servidor
 */
categoriaRouter.delete('/:idCategoria', verifyToken, remove);