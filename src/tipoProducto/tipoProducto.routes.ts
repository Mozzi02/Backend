import { Router } from 'express';
import { sanitizeTipoProductoInput, findAll, findOne, add, update, remove } from './tipoProducto.controler.js';
import { verifyToken } from '../auth/auth.controler.js';

export const tipoProductoRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     TipoProducto:
 *       type: object
 *       required:
 *         - idTipo
 *         - descripcion
 *       properties:
 *         idTipo:
 *           type: integer
 *           description: El id autogenerado del Tipo de Producto
 *         descripcion:
 *           type: string
 *           description: La descripcion del Tipo de Producto
 *       example:
 *         idTipo: 1
 *         descripcion: Campera
 */

/**
 * @swagger
 * tags:
 *   name: Tipo de Producto
 *   description: La API que administra los Tipos de Producto
 */

/**
 * @swagger
 * /tipos-producto:
 *   get:
 *     summary: Devuelve todos los Tipos de Producto
 *     tags: [Tipo de Producto]
 *     responses:
 *       200:
 *         description: Se encontraron todos los Tipos de Producto
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/TipoProducto'
 *       500:
 *          description: Error en el servidor
 */
tipoProductoRouter.get('/', verifyToken, findAll);


/**
 * @swagger
 * /tipos-producto/{idTipo}:
 *   get:
 *      summary: Devuelve un Tipo de Producto por ID
 *      tags: [Tipo de Producto]
 *      parameters:
 *        - in: path
 *          name: idTipo
 *          schema:
 *              type: integer
 *          required: true
 *          description: El ID del Tipo de Producto
 *      responses:
 *          200:
 *              description: Se encontró el Tipo de Producto
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/TipoProducto'
 *          
 *          500:
 *              description: Error en el servidor        
 */
tipoProductoRouter.get('/:idTipo', verifyToken, findOne);


/**
 * @swagger
 * /tipos-producto:
 *   post:
 *     summary: Crea un nuevo Tipo de Producto
 *     tags: [Tipo de Producto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TipoProducto'
 *     responses:
 *       201:
 *         description: El Tipo de Producto fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoProducto'
 *       500:
 *         description: Error en el servidor
 */
tipoProductoRouter.post('/', sanitizeTipoProductoInput, verifyToken, add);


/**
 * @swagger
 * /tipos-producto/{idTipo}:
 *   put:
 *     summary: Modifica un Tipo de Producto por ID
 *     tags: [Tipo de Producto]
 *     parameters:
 *       - in: path
 *         name: idTipo
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Tipo de Producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TipoProducto'
 *     responses:
 *       200:
 *         description: Tipo de Producto modificado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoProducto'
 *       500:
 *         description: Error en el servidor
 */
tipoProductoRouter.put('/:idTipo', sanitizeTipoProductoInput, verifyToken, update);


/**
 * @swagger
 * /tipos-producto/{idTipo}:
 *   delete:
 *     summary: Elimina un Tipo de Producto por ID
 *     tags: [Tipo de Producto]
 *     parameters:
 *       - in: path
 *         name: idTipo
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Tipo de Producto
 *     responses:
 *       200:
 *         description: El Tipo de Producto fue eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoProducto'
 *       500:
 *         description: Error en el servidor
 */
tipoProductoRouter.delete('/:idTipo', verifyToken, remove);