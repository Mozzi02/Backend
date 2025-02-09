import { Router } from 'express';
import { sanitizeRolInput, findAll, findOne, add, update, remove } from './rol.controler.js';
import { verifyToken, isAdmin } from '../auth/auth.controler.js';
export const rolRouter = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Rol:
 *       type: object
 *       required:
 *         - idRol
 *         - descripcion
 *       properties:
 *         idRol:
 *           type: integer
 *           description: El id autogenerado del Rol
 *         descripcion:
 *           type: string
 *           description: La descripcion del Rol
 *       example:
 *         idRol: 1
 *         descripcion: Administrador
 */
/**
 * @swagger
 * tags:
 *   name: Rol
 *   description: La API que administra los Roles
 */
/**
 * @swagger
 * /roles:
 *   get:
 *     summary: Devuelve todos los Roles
 *     tags: [Rol]
 *     responses:
 *       200:
 *         description: Se encontraron todos los Roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Rol'
 *       500:
 *          description: Error en el servidor
 */
rolRouter.get('/', verifyToken, isAdmin, findAll);
/**
 * @swagger
 * /roles/{idRol}:
 *   get:
 *      summary: Devuelve un Rol por ID
 *      tags: [Rol]
 *      parameters:
 *        - in: path
 *          name: idRol
 *          schema:
 *              type: integer
 *          required: true
 *          description: El ID del Rol
 *      responses:
 *          200:
 *              description: Se encontró el Rol
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Rol'
 *
 *          500:
 *              description: Error en el servidor
 */
rolRouter.get('/:idRol', verifyToken, isAdmin, findOne);
/**
 * @swagger
 * /roles:
 *   post:
 *     summary: Crea un nuevo Rol
 *     tags: [Rol]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rol'
 *     responses:
 *       201:
 *         description: El Rol fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 *       500:
 *         description: Error en el servidor
 */
rolRouter.post('/', sanitizeRolInput, verifyToken, isAdmin, add);
/**
 * @swagger
 * /roles/{idRol}:
 *   put:
 *     summary: Modifica un Rol por ID
 *     tags: [Rol]
 *     parameters:
 *       - in: path
 *         name: idRol
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Rol
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rol'
 *     responses:
 *       200:
 *         description: Rol modificado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 *       500:
 *         description: Error en el servidor
 */
rolRouter.put('/:idRol', sanitizeRolInput, verifyToken, isAdmin, update);
/**
 * @swagger
 * /roles/{idRol}:
 *   delete:
 *     summary: Elimina un Rol por ID
 *     tags: [Rol]
 *     parameters:
 *       - in: path
 *         name: idRol
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Rol
 *     responses:
 *       200:
 *         description: El Rol fue eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 *       500:
 *         description: Error en el servidor
 */
rolRouter.delete('/:idRol', verifyToken, isAdmin, remove);
//# sourceMappingURL=rol.routes.js.map