import { Router } from 'express';
import { sanitizeProveedorInput, findAll, findOne, add, update, remove, findSome } from './proveedor.controler.js';
import { verifyToken, isAdmin } from '../auth/auth.controler.js';

export const proveedorRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Proveedor:
 *       type: object
 *       required:
 *         - idProveedor
 *         - cuit
 *         - razonSocial
 *         - telefono
 *         - email
 *       properties:
 *          idProveedor:
 *              type: integer
 *              description: El id autogenerado del Proveedor
 *          cuit:
 *              type: string
 *              description: El cuit del proveedor
 *          razonSocial:
 *              type: string
 *              description: La razon social del Proveedor
 *          telefono:
 *              type: string
 *              description: El telefono del Proveedor
 *          email:
 *              type: string
 *              description: El email del Proveedor
 *  
 *       example:
 *          idProveedor: 1
 *          cuit: 20112223330
 *          razonSocial: Buenos Amigos
 *          telefono: +54 3329 112233 
 *          email: buenosamigos@gmail.com
 */

/**
 * @swagger
 * tags:
 *   name: Proveedor
 *   description: La API que administra los Proveedores
 */

/**
 * @swagger
 * /proveedores:
 *   get:
 *     summary: Devuelve todos los Proveedores
 *     tags: [Proveedor]
 *     responses:
 *       200:
 *         description: Se encontraron todos los Proveedores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Proveedor'
 *       500:
 *          description: Error en el servidor
 */
proveedorRouter.get('/', verifyToken, isAdmin, findAll);


/**
 * @swagger
 * /proveedores/{idProveedor}:
 *   get:
 *     summary: Devuelve un Proveedor por ID
 *     tags: [Proveedor]
 *     parameters:
 *       - in: path
 *         name: idProveedor
 *         schema:
 *              type: integer
 *         required: true
 *         descrpition: El ID del Proveedor
 *     responses:
 *       200:
 *         description: Se encontró el Proveedor
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Proveedor'
 *       500:
 *          description: Error en el servidor
 */
proveedorRouter.get('/:idProveedor', verifyToken, isAdmin, findOne);


/**
 * @swagger
 * /proveedores/buscar/{descripcion}:
 *   get:
 *     summary: Devuelve Proveedores por descripcion
 *     tags: [Proveedor]
 *     parameters:
 *       - in: path
 *         name: descripcion
 *         schema:
 *              type: string
 *         required: true
 *         descrpition: La descripcion de un proveedor
 *     responses:
 *       200:
 *         description: Se encontraron Proveedores
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Proveedor'
 *       500:
 *          description: Error en el servidor
 */
proveedorRouter.get('/buscar/:razonSocial', verifyToken, isAdmin, findSome);


/**
 * @swagger
 * /proveedores:
 *   post:
 *     summary: Crea un nuevo Proveedor
 *     tags: [Proveedor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proveedor'
 *     responses:
 *       201:
 *         description: El Proveedor fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       500:
 *         description: Error en el servidor
 */
proveedorRouter.post('/', sanitizeProveedorInput, verifyToken, isAdmin, add);


/**
 * @swagger
 * /proveedores/{idProveedor}:
 *   put:
 *     summary: Modifica un Proveedor por ID
 *     tags: [Proveedor]
 *     parameters:
 *       - in: path
 *         name: idProveedor
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Proveedor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proveedor'
 *     responses:
 *       200:
 *         description: Proveedor modificado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       500:
 *         description: Error en el servidor
 */
proveedorRouter.put('/:idProveedor', sanitizeProveedorInput, verifyToken, isAdmin, update);


/**
 * @swagger
 * /proveedores/{idProveedor}:
 *   delete:
 *     summary: Elimina un Proveedor por ID
 *     tags: [Proveedor]
 *     parameters:
 *       - in: path
 *         name: idProveedor
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Proveedor
 *     responses:
 *       200:
 *         description: El Proveedor fue eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       500:
 *         description: Error en el servidor
 */
proveedorRouter.delete('/:idProveedor', verifyToken, isAdmin, remove);