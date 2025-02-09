import { Router } from 'express';
import { sanitizeProductoInput, findAll, findOne, add, update, remove, findSome } from './producto.controler.js';
import { verifyToken } from '../auth/auth.controler.js';
export const productoRouter = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *      Producto:
 *       type: object
 *       required:
 *         - idProducto
 *         - descripcion
 *         - precio
 *         - tipoProducto
 *         - stock
 *         - imagen
 *       properties:
 *          idProducto:
 *              type: integer
 *              description: El id autogenerado del Producto
 *          descripcion:
 *              type: string
 *              description: La descripcion del Producto
 *          precio:
 *              type: number
 *              description: El precio del Producto
 *          tipoProducto:
 *              type: object
 *              properties:
 *                  idTipo:
 *                      type: number
 *                      description: El id autogenerado del Tipo de Producto
 *                  descripcion:
 *                      type: string
 *                      description: La descripcion del Tipo de Producto
 *          stock:
 *              type: number
 *              description: El stock del Producto
 *          imagen:
 *              type: string
 *              description: La URL de la imagen del producto
 *
 *       example:
 *          idProducto: 1
 *          descripcion: Campera de ejemplo
 *          precio: 100
 *          tipoProducto:
 *              idTipo: 1
 *              descripcion: Campera
 *          stock: 10
 *          imagen: https://www.imagen-de-ejemplo.png
 */
/**
 * @swagger
 * tags:
 *   name: Producto
 *   description: La API que administra los Productos
 */
/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Devuelve todas los Productos
 *     tags: [Producto]
 *     responses:
 *       200:
 *         description: Se encontraron todos los Productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Producto'
 *       500:
 *          description: Error en el servidor
 */
productoRouter.get('/', verifyToken, findAll);
/**
 * @swagger
 * /productos/{idProducto}:
 *   get:
 *     summary: Devuelve un Producto por ID
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: idProducto
 *         schema:
 *              type: integer
 *         required: true
 *         descrpition: El ID del Producto
 *     responses:
 *       200:
 *         description: Se encontró el Producto
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Producto'
 *       500:
 *          description: Error en el servidor
 */
productoRouter.get('/:idProducto', verifyToken, findOne);
/**
 * @swagger
 * /productos/buscar/{descripcion}:
 *   get:
 *     summary: Devuelve Productos por descripcion
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: descripcion
 *         schema:
 *              type: string
 *         required: true
 *         descrpition: La descripcion del Producto
 *     responses:
 *       200:
 *         description: Se encontraron Productos
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Producto'
 *       500:
 *          description: Error en el servidor
 */
productoRouter.get('/buscar/:descripcion', verifyToken, findSome);
/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Crea un nuevo Producto
 *     tags: [Producto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       201:
 *         description: El Producto fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       500:
 *         description: Error en el servidor
 */
productoRouter.post('/', sanitizeProductoInput, verifyToken, add);
/**
 * @swagger
 * /productos/{idProducto}:
 *   put:
 *     summary: Modifica un Producto por ID
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: idProducto
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: Producto modificado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       500:
 *         description: Error en el servidor
 */
productoRouter.put('/:idProducto', sanitizeProductoInput, verifyToken, update);
/**
 * @swagger
 * /productos/{idProducto}:
 *   patch:
 *     summary: Modifica un Producto por ID
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: idProducto
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: Producto modificado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       500:
 *         description: Error en el servidor
 */
productoRouter.patch('/:idProducto', sanitizeProductoInput, verifyToken, update);
/**
 * @swagger
 * /productos/{idProducto}:
 *   delete:
 *     summary: Elimina un Producto por ID
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: idProducto
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Producto
 *     responses:
 *       200:
 *         description: El Producto fue eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       500:
 *         description: Error en el servidor
 */
productoRouter.delete('/:idProducto', verifyToken, remove);
//# sourceMappingURL=producto.routes.js.map