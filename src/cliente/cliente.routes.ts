import { Router } from 'express';
import { sanitizeClienteInput, findAll, findOne, add, update, remove } from './cliente.controler.js';
import { verifyToken } from '../auth/auth.controler.js';

export const clienteRoutes = Router();



/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       required:
 *         - idCliente
 *         - nombre
 *         - apellido
 *         - telefono
 *         - email
 *         - direccion
 *         - cuit
 *         - categoria
 *       properties:
 *         idCliente:
 *           type: integer
 *           description: El id autogenerado del Cliente
 *         nombre:
 *           type: string
 *           description: El nombre del Cliente
 *         apellido:
 *           type: string
 *           description: El apellido del Cliente
 *         telefono:
 *           type: string
 *           description: El telefono del Cliente
 *         email:
 *           type: string
 *           description: El email del Cliente
 *         direccion:
 *           type: string
 *           description: La direccion del Cliente
 *         cuit:
 *           type: string
 *           description: El cuit del Cliente
 *         categoria:
 *           type: object
 *           properties:
 *              idCategoria:
 *                  type: integer
 *                  descrpition: El ID de la Categoria del Cliente
 *              descrpicion:
 *                  type: string
 *                  description: La descripcion de la Categoria del Cliente
 *       example:
 *         idCliente: 1
 *         nombre: John
 *         apellido: Doe
 *         telefono: +54 3329 112233
 *         email: johndoe@gmail.com
 *         direccion: Calle Falsa 123
 *         cuit: 20112223330
 *         categoria:
 *              idCategoria: 1
 *              descripcion: Minorista
 */

/**
 * @swagger
 * tags:
 *   name: Cliente
 *   description: La API que administra los Clientes
 */

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Devuelve todas los clientes
 *     tags: [Cliente]
 *     responses:
 *       200:
 *         description: Se encontraron todas los clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Cliente'
 *       500:
 *          description: Error en el servidor
 */
clienteRoutes.get('/', verifyToken, findAll);


/**
 * @swagger
 * /clientes/{idCliente}:
 *   get:
 *     summary: Devuelve un Cliente por ID
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: idCliente
 *         schema:
 *              type: integer
 *         required: true
 *         descrpition: El ID del Cliente
 *     responses:
 *       200:
 *         description: Se encontró el Cliente
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Cliente'
 *       500:
 *          description: Error en el servidor
 */
clienteRoutes.get('/:idCliente', verifyToken, findOne);


/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Crea un nuevo Cliente
 *     tags: [Cliente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       201:
 *         description: El Cliente fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       500:
 *         description: Error en el servidor
 */
clienteRoutes.post('/', sanitizeClienteInput, verifyToken, add);


/**
 * @swagger
 * /clientes/{idCliente}:
 *   put:
 *     summary: Modifica un Cliente por ID
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: idCliente
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: Cliente modificado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       500:
 *         description: Error en el servidor
 */
clienteRoutes.put('/:idCliente', sanitizeClienteInput, verifyToken, update);


/**
 * @swagger
 * /clientes/{idCliente}:
 *   patch:
 *     summary: Modifica un Cliente por ID
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: idCliente
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: Cliente modificado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       500:
 *         description: Error en el servidor
 */
clienteRoutes.patch('/:idCliente', sanitizeClienteInput, verifyToken, update);


/**
 * @swagger
 * /clientes/{idCliente}:
 *   delete:
 *     summary: Elimina un Cliente por ID
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: idCliente
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Cliente
 *     responses:
 *       200:
 *         description: El Cliente fue eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       500:
 *         description: Error en el servidor
 */
clienteRoutes.delete('/:idCliente', verifyToken, remove);