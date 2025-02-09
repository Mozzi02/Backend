import { Router } from 'express';
import { sanitizePedidoInput, findAll, findOne, add, update, remove } from './pedido.controler.js';
import { verifyToken, isAdmin } from '../auth/auth.controler.js';

export const pedidoRoutes = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Pedido:
 *       type: object
 *       required:
 *         - idPedido
 *         - fechaPedido
 *         - cantidad
 *         - estado
 *         - proveedor
 *         - empleado
 *         - producto
 *       properties:
 *         idPedido:
 *           type: integer
 *           description: El id autogenerado del Pedido
 *         fechaPedido:
 *           type: string
 *           description: La fecha del Pedido
 *         cantidad:
 *           type: integer
 *           description: La cantidad del Pedido
 *         estado:
 *           type: string
 *           description: El estado del Pedido
 *         proveedor:
 *           type: object
 *           properties:
 *              idProveedor:
 *                  type: integer
 *                  description: El id autogenerado del Proveedor
 *              cuit:
 *                  type: string
 *                  description: El cuit del Proveedor
 *              razonSocial:
 *                  type: string
 *                  description: La razon social del Proveedor
 *              telefono:
 *                  type: string
 *                  description: El telefono del Proveedor
 *              email:
 *                  type: string
 *                  description: El email del Proveedor
 *         empleado:
 *           type: object
 *           properties:
 *              idEmpleado:
 *                  type: integer
 *                  description: El id autogenerado del Empleado
 *              nombre:
 *                  type: string
 *                  description: El nombre del Empleado
 *              apellido:
 *                  type: string
 *                  description: El apellido del Empleado
 *              telefono:
 *                  type: string
 *                  description: El telefono del Empleado
 *              email:
 *                  type: string
 *                  description: El email del Empleado
 *              direccion:
 *                  type: string
 *                  description: La direccion del Empleado
 *              dni:
 *                  type: string
 *                  description: El DNI del Empleado
 *              rol:
 *                  type: object
 *                  properties:
 *                      idRol:
 *                          type: integer
 *                          descrpition: El ID del Rol del Empleado
 *                      descrpicion:
 *                          type: string
 *                          description: La descripcion del Rol del Empleado
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
 *                  type: number
 *                  description: El precio del Producto
 *              tipoProducto:
 *                  type: object
 *                  properties:
 *                      idTipo:
 *                          type: integer
 *                          description: El id autogenerado del Tipo de Producto
 *                      descripcion:
 *                          type: string
 *                          description: La descripcion del Tipo de Producto
 *              stock:
 *                  type: number
 *                  description: El stock del Producto
 *              imagen:
 *                  type: string
 *                  description: La URL de la imagen del producto
 *       example:
 *          idPedido: 1
 *          fechaPedido: 2025-01-01
 *          cantidad: 1
 *          estado: Confirmado
 *          proveedor:
 *              idProveedor: 1
 *              cuit: 20112223330
 *              razonSocial: Buenos Amigos
 *              telefono: +54 3329 112233
 *              email: buenosamigos@gmail.com
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
 *          producto:
 *              idProducto: 1
 *              descripcion: Campera de ejemplo
 *              precio: 100
 *              tipoProducto:
 *                  idTipo: 1
 *                  descripcion: Campera   
 *              stock: 10
 *              imagen: https://www.imagen-de-ejemplo.png
 */

/**
 * @swagger
 * tags:
 *   name: Pedido
 *   description: La API que administra los Pedidos
 */

/**
 * @swagger
 * /pedidos:
 *   get:
 *     summary: Devuelve todas los Pedidos
 *     tags: [Pedido]
 *     responses:
 *       200:
 *         description: Se encontraron todos los Pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Pedido'
 *       500:
 *          description: Error en el servidor
 */
pedidoRoutes.get('/', verifyToken, isAdmin, findAll);


/**
 * @swagger
 * /pedidos/{idPedido}:
 *   get:
 *     summary: Devuelve un Pedido por ID
 *     tags: [Pedido]
 *     parameters:
 *       - in: path
 *         name: idPedido
 *         schema:
 *              type: integer
 *         required: true
 *         descrpition: El ID del Pedido
 *     responses:
 *       200:
 *         description: Se encontró el Pedido
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Pedido'
 *       500:
 *          description: Error en el servidor
 */
pedidoRoutes.get('/:idPedido',  verifyToken, isAdmin, findOne);


/**
 * @swagger
 * /pedidos:
 *   post:
 *     summary: Crea un nuevo Pedido
 *     tags: [Pedido]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       201:
 *         description: El Pedido fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       500:
 *         description: Error en el servidor
 */
pedidoRoutes.post('/', sanitizePedidoInput,  verifyToken, isAdmin, add);


/**
 * @swagger
 * /pedidos/{idPedido}:
 *   put:
 *     summary: Modifica un Pedido por ID
 *     tags: [Pedido]
 *     parameters:
 *       - in: path
 *         name: idPedido
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       200:
 *         description: Pedido modificado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       500:
 *         description: Error en el servidor
 */
pedidoRoutes.put('/:idPedido', sanitizePedidoInput,  verifyToken, isAdmin, update);


/**
 * @swagger
 * /pedidos/{idPedido}:
 *   patch:
 *     summary: Modifica un Pedido por ID
 *     tags: [Pedido]
 *     parameters:
 *       - in: path
 *         name: idPedido
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       200:
 *         description: Pedido modificado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       500:
 *         description: Error en el servidor
 */
pedidoRoutes.patch('/:idPedido', sanitizePedidoInput,  verifyToken, isAdmin, update);


/**
 * @swagger
 * /pedidos/{idPedido}:
 *   delete:
 *     summary: Elimina un Pedido por ID
 *     tags: [Pedido]
 *     parameters:
 *       - in: path
 *         name: idPedido
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Pedido
 *     responses:
 *       200:
 *         description: El Pedido fue eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       500:
 *         description: Error en el servidor
 */
pedidoRoutes.delete('/:idPedido',  verifyToken, isAdmin, remove);