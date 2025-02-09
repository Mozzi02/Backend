import { Router } from 'express';
import { sanitizeVentaInput, findAll, findOne, add, update, remove, findSome } from './venta.controler.js';
import { verifyToken } from '../auth/auth.controler.js';

export const ventaRoutes = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Venta:
 *       type: object
 *       required:
 *         - idVenta
 *         - fechaVenta
 *         - cliente
 *         - empleado
 *       properties:
 *          idVenta:
 *              type: integer
 *              description: El id autogenerado de la Venta
 *          fechaVenta:
 *              type: string
 *              description: La fecha de la venta
 *          cliente:
 *              type: object
 *              properties:
 *                  idCliente:
 *                      type: integer
 *                      description: El id autogenerado del Cliente
 *                  nombre:
 *                      type: string
 *                      description: El nombre del Cliente
 *                  apellido:
 *                      type: string
 *                      description: El apellido del Cliente
 *                  telefono:
 *                      type: string
 *                      description: El telefono del Cliente
 *                  email:
 *                      type: string
 *                      description: El email del Cliente
 *                  direccion:
 *                      type: string
 *                      description: La direccion del Cliente
 *                  cuit:
 *                      type: string
 *                      description: El cuit del Cliente
 *                  categoria:
 *                      type: object
 *                      properties:
 *                          idCategoria:
 *                              type: integer
 *                              descrpition: El ID de la Categoria del Cliente
 *                          descrpicion:
 *                              type: string
 *                              description: La descripcion de la Categoria del Cliente
 *          empleado:
 *              type: object
 *              properties:
 *                  idEmpleado:
 *                      type: integer
 *                      description: El id autogenerado del Empleado
 *                  nombre:
 *                      type: string
 *                      description: El nombre del Empleado
 *                  apellido:
 *                      type: string
 *                      description: El apellido del Empleado
 *                  telefono:
 *                      type: string
 *                      description: El telefono del Empleado
 *                  email:
 *                      type: string
 *                      description: El email del Empleado
 *                  direccion:
 *                      type: string
 *                      description: La direccion del Empleado
 *                  dni:
 *                      type: string
 *                      description: El DNI del Empleado
 *                  rol:
 *                      type: object
 *                      properties:
 *                          idRol:
 *                              type: integer
 *                              descrpition: El ID del Rol del Empleado
 *                          descrpicion:
 *                              type: string
 *                              description: La descripcion del Rol del Empleado
 *       example:
 *          idVenta: 1
 *          fechaVenta: 2025-01-01
 *          cliente:
 *              idCliente: 1
 *              nombre: John
 *              apellido: Doe
 *              telefono: +54 3329 112233
 *              email: johndoe@gmail.com
 *              direccion: Calle Falsa 123
 *              cuit: 20112223330
 *              categoria:
 *                  idCategoria: 1
 *                  descripcion: Minorista
 *          empleado:
 *              idEmpleado: 1
 *              nombre: John
 *              apellido: Doe
 *              telefono: +54 3329 112233
 *              email: johndoe@gmail.com
 *              direccion: Calle Falsa 123
 *              dni: 11222333
 *              rol:
 *                  idRol: 1
 *                  descripcion: Administrador
 */

/**
 * @swagger
 * tags:
 *   name: Venta
 *   description: La API que administra las Ventas
 */

/**
 * @swagger
 * /ventas:
 *   get:
 *     summary: Devuelve todas las Ventas
 *     tags: [Venta]
 *     responses:
 *       200:
 *         description: Se encontraron todas las Ventas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Venta'
 *       500:
 *          description: Error en el servidor
 */
ventaRoutes.get('/', verifyToken, findAll);


/**
 * @swagger
 * /ventas/{idVenta}:
 *   get:
 *      summary: Devuelve una Venta por ID
 *      tags: [Venta]
 *      parameters:
 *        - in: path
 *          name: idVenta
 *          schema:
 *              type: integer
 *          required: true
 *          description: El ID de la Venta
 *      responses:
 *          200:
 *              description: Se encontró la Venta
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Venta'
 *          
 *          500:
 *              description: Error en el servidor        
 */
ventaRoutes.get('/:idVenta', verifyToken, findOne);


/**
 * @swagger
 * /ventas/buscar/{year}:
 *   get:
 *      summary: Devuelve Ventas por año
 *      tags: [Venta]
 *      parameters:
 *        - in: path
 *          name: year
 *          schema:
 *              type: number
 *          required: true
 *          description: El año de las Ventas
 *      responses:
 *          200:
 *              description: Se encontraron Ventas
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Venta'
 *          
 *          500:
 *              description: Error en el servidor        
 */
ventaRoutes.get('/buscar/:year', verifyToken, findSome);


/**
 * @swagger
 * /ventas:
 *   post:
 *     summary: Crea una nueva Venta
 *     tags: [Venta]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *     responses:
 *       201:
 *         description: La Venta fue creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       500:
 *         description: Error en el servidor
 */
ventaRoutes.post('/', sanitizeVentaInput, verifyToken, add);


/**
 * @swagger
 * /ventas/{idVenta}:
 *   put:
 *     summary: Modifica una Venta por ID
 *     tags: [Venta]
 *     parameters:
 *       - in: path
 *         name: idVenta
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID de la Venta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *     responses:
 *       200:
 *         description: Venta modificada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       500:
 *         description: Error en el servidor
 */
ventaRoutes.put('/:idVenta', sanitizeVentaInput, verifyToken, update);


/**
 * @swagger
 * /ventas/{idVenta}:
 *   patch:
 *     summary: Modifica una Venta por ID
 *     tags: [Venta]
 *     parameters:
 *       - in: path
 *         name: idVenta
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID de la Venta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *     responses:
 *       200:
 *         description: Venta modificada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       500:
 *         description: Error en el servidor
 */
ventaRoutes.patch('/:idVenta', sanitizeVentaInput, verifyToken, update);


/**
 * @swagger
 * /ventas/{idVenta}:
 *   delete:
 *     summary: Elimina una Venta por ID
 *     tags: [Venta]
 *     parameters:
 *       - in: path
 *         name: idVenta
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID de la Venta
 *     responses:
 *       200:
 *         description: La Venta fue eliminada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       500:
 *         description: Error en el servidor
 */
ventaRoutes.delete('/:idVenta', verifyToken, remove);