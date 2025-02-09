import { Router } from 'express';
import { sanitizeLineaInput, findAll, findOne, findSome, add, update, remove } from './lineaDeVenta.controler.js';
import { verifyToken } from '../auth/auth.controler.js';
export const lineaDeVentaRoutes = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *      Linea:
 *       type: object
 *       required:
 *         - idLineaVenta
 *         - cantidad
 *         - producto
 *         - venta
 *       properties:
 *         idLineaVenta:
 *           type: integer
 *           description: El id autogenerado de la Linea
 *         cantidad:
 *           type: integer
 *           description: La cantidad del Producto correspondiente a la Linea
 *         producto:
 *           type: object
 *           properties:
 *              idProducto:
 *                  type: integer
 *                  description: El id autogenerado del Producto
 *              descripcion:
 *                  type: string
 *                  description: La descripcion del Producto
 *              precio:
 *                  type: integer
 *                  description: El precio del Producto
 *              tipoProducto:
 *                  type: object
 *                  properties:
 *                      idTipo:
 *                          type: number
 *                          description: El id autogenerado del Tipo de Producto
 *                      descripcion:
 *                          type: string
 *                          description: La descripcion del Tipo de Producto
 *              stock:
 *                  type: integer
 *                  description: El stock del Producto
 *              imagen:
 *                  type: string
 *                  description: La URL de la imagen del producto
 *         venta:
 *           type: object
 *           properties:
 *              idVenta:
 *                  type: integer
 *                  description: El id autogenerado de la Venta
 *              fechaVenta:
 *                  type: string
 *                  description: La fecha de la venta
 *              cliente:
 *                  type: object
 *                  properties:
 *                      idCliente:
 *                          type: integer
 *                          description: El id autogenerado del Cliente
 *                      nombre:
 *                          type: string
 *                          description: El nombre del Cliente
 *                      apellido:
 *                          type: string
 *                          description: El apellido del Cliente
 *                      telefono:
 *                          type: string
 *                          description: El telefono del Cliente
 *                      email:
 *                          type: string
 *                          description: El email del Cliente
 *                      direccion:
 *                          type: string
 *                          description: La direccion del Cliente
 *                      cuit:
 *                          type: string
 *                          description: El cuit del Cliente
 *                      categoria:
 *                          type: object
 *                          properties:
 *                              idCategoria:
 *                                  type: integer
 *                                  descrpition: El ID de la Categoria del Cliente
 *                              descrpicion:
 *                                  type: string
 *                                  description: La descripcion de la Categoria del Cliente
 *              empleado:
 *                  type: object
 *                  properties:
 *                      idEmpleado:
 *                          type: integer
 *                          description: El id autogenerado del Empleado
 *                      nombre:
 *                          type: string
 *                          description: El nombre del Empleado
 *                      apellido:
 *                          type: string
 *                          description: El apellido del Empleado
 *                      telefono:
 *                          type: string
 *                          description: El telefono del Empleado
 *                      email:
 *                          type: string
 *                          description: El email del Empleado
 *                      direccion:
 *                          type: string
 *                          description: La direccion del Empleado
 *                      dni:
 *                          type: string
 *                          description: El DNI del Empleado
 *                      rol:
 *                          type: object
 *                          properties:
 *                              idRol:
 *                                  type: integer
 *                                  descrpition: El ID del Rol del Empleado
 *                              descrpicion:
 *                                  type: string
 *                                  description: La descripcion del Rol del Empleado
 *       example:
 *          idLineaVenta: 1
 *          cantidad: 1
 *          producto:
 *              idProducto: 1
 *              descripcion: Campera de ejemplo
 *              precio: 100
 *              tipoProducto:
 *                  idTipo: 1
 *                  descripcion: Campera
 *              stock: 10
 *              imagen: https://www.imagen-de-ejemplo.png
 *          venta:
 *              idVenta: 1
 *              fechaVenta: 2025-01-01
 *              cliente:
 *                  idCliente: 1
 *                  nombre: John
 *                  apellido: Doe
 *                  telefono: +54 3329 112233
 *                  email: johndoe@gmail.com
 *                  direccion: Calle Falsa 123
 *                  cuit: 20112223330
 *                  categoria:
 *                      idCategoria: 1
 *                      descripcion: Minorista
 *              empleado:
 *                  idEmpleado: 1
 *                  nombre: John
 *                  apellido: Doe
 *                  telefono: +54 3329 112233
 *                  email: johndoe@gmail.com
 *                  direccion: Calle Falsa 123
 *                  dni: 11222333
 *                  rol:
 *                      idRol: 1
 *                      descripcion: Administrador
 */
/**
 * @swagger
 * tags:
 *   name: Linea
 *   description: La API que administra las Lineas de Venta
 */
/**
 * @swagger
 * /lineas:
 *   get:
 *     summary: Devuelve todas las Lineas de Venta
 *     tags: [Linea]
 *     responses:
 *       200:
 *         description: Se encontraron todas las Lineas de Venta
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Linea'
 *       500:
 *          description: Error en el servidor
 */
lineaDeVentaRoutes.get('/', verifyToken, findAll);
/**
 * @swagger
 * /lineas/{idLineaVenta}:
 *   get:
 *     summary: Devuelve una Linea de Venta por ID
 *     tags: [Linea]
 *     parameters:
 *       - in: path
 *         name: idLineaVenta
 *         schema:
 *              type: integer
 *         required: true
 *         descrpition: El ID de la Linea de Venta
 *     responses:
 *       200:
 *         description: Se encontró la Linea de Venta
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Linea'
 *       500:
 *          description: Error en el servidor
 */
lineaDeVentaRoutes.get('/:idLineaVenta', verifyToken, findOne);
/**
 * @swagger
 * /lineas/venta/{idVenta}:
 *   get:
 *     summary: Devuelve las Lineas de Venta de una Venta por ID
 *     tags: [Linea]
 *     parameters:
 *       - in: path
 *         name: idVenta
 *         schema:
 *              type: integer
 *         required: true
 *         descrpition: El ID de la Venta objetivo
 *     responses:
 *       200:
 *         description: Se encontraron las Lineas de la Venta indicada
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Linea'
 *       500:
 *          description: Error en el servidor
 */
lineaDeVentaRoutes.get('/venta/:idVenta', verifyToken, findSome);
/**
 * @swagger
 * /lineas:
 *   post:
 *     summary: Crea una nueva Linea de Venta
 *     tags: [Linea]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Linea'
 *     responses:
 *       201:
 *         description: La Linea de Venta fue creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Linea'
 *       500:
 *         description: Error en el servidor
 */
lineaDeVentaRoutes.post('/', sanitizeLineaInput, verifyToken, add);
/**
 * @swagger
 * /lineas/{idLineaVenta}:
 *   put:
 *     summary: Modifica una Linea de Venta por ID
 *     tags: [Linea]
 *     parameters:
 *       - in: path
 *         name: idLineaVenta
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID de la Linea de Venta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Linea'
 *     responses:
 *       200:
 *         description: Linea de Venta modificada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Linea'
 *       500:
 *         description: Error en el servidor
 */
lineaDeVentaRoutes.put('/:idLineaVenta', sanitizeLineaInput, verifyToken, update);
/**
 * @swagger
 * /lineas/{idLineaVenta}:
 *   patch:
 *     summary: Modifica una Linea de Venta por ID
 *     tags: [Linea]
 *     parameters:
 *       - in: path
 *         name: idLineaVenta
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID de la Linea de Venta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Linea'
 *     responses:
 *       200:
 *         description: Linea de Venta modificada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Linea'
 *       500:
 *         description: Error en el servidor
 */
lineaDeVentaRoutes.patch('/:idLineaVenta', sanitizeLineaInput, verifyToken, update);
/**
 * @swagger
 * /lineas/{idLineaVenta}:
 *   delete:
 *     summary: Elimina una Linea de Venta por ID
 *     tags: [Linea]
 *     parameters:
 *       - in: path
 *         name: idLineaVenta
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID de la Linea de Venta
 *     responses:
 *       200:
 *         description: La Linea de Venta fue eliminada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Linea'
 *       500:
 *         description: Error en el servidor
 */
lineaDeVentaRoutes.delete('/:idLineaVenta', verifyToken, remove);
//# sourceMappingURL=lineaDeVenta.routes.js.map