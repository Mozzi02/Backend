import { Router } from 'express';
import { findAll, findOne, add, update, remove, sanitizeEmpleadoInput } from './empleado.controler.js';
import { verifyToken, isAdmin } from '../auth/auth.controler.js';
export const empleadoRoutes = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Empleado:
 *       type: object
 *       required:
 *         - idEmpleado
 *         - nombre
 *         - apellido
 *         - telefono
 *         - email
 *         - direccion
 *         - dni
 *         - rol
 *         - password
 *       properties:
 *         idEmpleado:
 *           type: integer
 *           description: El id autogenerado del Empleado
 *         nombre:
 *           type: string
 *           description: El nombre del Empleado
 *         apellido:
 *           type: string
 *           description: El apellido del Empleado
 *         telefono:
 *           type: string
 *           description: El telefono del Empleado
 *         email:
 *           type: string
 *           description: El email del Empleado
 *         direccion:
 *           type: string
 *           description: La direccion del Empleado
 *         dni:
 *           type: string
 *           description: El DNI del Empleado
 *         rol:
 *           type: object
 *           properties:
 *              idRol:
 *                  type: integer
 *                  descrpition: El ID del Rol del Empleado
 *              descrpicion:
 *                  type: string
 *                  description: La descripcion del Rol del Empleado
 *       example:
 *         idEmpleado: 1
 *         nombre: John
 *         apellido: Doe
 *         telefono: +54 3329 112233
 *         email: johndoe@gmail.com
 *         direccion: Calle Falsa 123
 *         dni: 11222333
 *         rol:
 *              idRol: 1
 *              descripcion: Administrador
 */
/**
 * @swagger
 * tags:
 *   name: Empleado
 *   description: La API que administra los Empleados
 */
/**
 * @swagger
 * /empleados:
 *   get:
 *     summary: Devuelve todos los Empleados
 *     tags: [Empleado]
 *     responses:
 *       200:
 *         description: Se encontraron todos los empleados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Empleado'
 *       500:
 *          description: Error en el servidor
 */
empleadoRoutes.get('/', verifyToken, isAdmin, findAll);
/**
 * @swagger
 * /empleados/{idEmpleado}:
 *   get:
 *     summary: Devuelve un Empleado por ID
 *     tags: [Empleado]
 *     parameters:
 *       - in: path
 *         name: idEmpleado
 *         schema:
 *              type: integer
 *         required: true
 *         descrpition: El ID del Empleado
 *     responses:
 *       200:
 *         description: Se encontró el Empleado
 *         content:
 *           application/json:
 *             schema:
 *                  $ref: '#/components/schemas/Empleado'
 *       500:
 *          description: Error en el servidor
 */
empleadoRoutes.get('/:idEmpleado', verifyToken, isAdmin, findOne);
/**
 * @swagger
 * /empleados:
 *   post:
 *     summary: Crea un nuevo Empleado
 *     tags: [Empleado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       201:
 *         description: El Empleado fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       500:
 *         description: Error en el servidor
 */
empleadoRoutes.post('/', sanitizeEmpleadoInput, verifyToken, isAdmin, add);
/**
 * @swagger
 * /empleados/{idEmpleado}:
 *   put:
 *     summary: Modifica un Empleado por ID
 *     tags: [Empleado]
 *     parameters:
 *       - in: path
 *         name: idEmpleado
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Empleado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       200:
 *         description: Empleado modificado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       500:
 *         description: Error en el servidor
 */
empleadoRoutes.put('/:idEmpleado', sanitizeEmpleadoInput, verifyToken, isAdmin, update);
/**
 * @swagger
 * /empleados/{idEmpleado}:
 *   patch:
 *     summary: Modifica un Empleado por ID
 *     tags: [Empleado]
 *     parameters:
 *       - in: path
 *         name: idEmpleado
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Empleado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       200:
 *         description: Empleado modificado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       500:
 *         description: Error en el servidor
 */
empleadoRoutes.patch('/:idEmpleado', sanitizeEmpleadoInput, verifyToken, isAdmin, update);
/**
 * @swagger
 * /empleados/{idEmpleado}:
 *   delete:
 *     summary: Elimina un Empleado por ID
 *     tags: [Empleado]
 *     parameters:
 *       - in: path
 *         name: idEmpleado
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del Empleado
 *     responses:
 *       200:
 *         description: El Empleado fue eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       500:
 *         description: Error en el servidor
 */
empleadoRoutes.delete('/:idEmpleado', verifyToken, isAdmin, remove);
//# sourceMappingURL=empleado.routes.js.map