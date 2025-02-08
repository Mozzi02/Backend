import { Router } from "express";
import { sanitizeAuthInput, login } from "./auth.controler.js";
export const authRoutes = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 */
/**
 * @swagger
 * tags:
 *   name: Login
 *   description: La API que administra el Login
 */
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Intenta logear con las credenciales brindadas
 *     tags: [Login]
 *     responses:
 *      200:
 *         description: Login exitoso
 *         content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          description: Mensaje de exito
 *                      token:
 *                          type: string
 *                          description: Token del usuario
 *                      usuario:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  description: ID del Empleado logeado
 *                              email:
 *                                  type: string
 *                                  description: Email del Empleado logeado
 *                              rol:
 *                                  type: integer
 *                                  description: Rol del Empleado logeado
 *
 *      401a:
 *          description: Empleado no existente
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              description: Mensaje de error
 *
 *      401b:
 *          description: Contraseña incorrecta
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              description: Mensaje de error
 *
 *      500:
 *          description: Error en el servidor
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              description: Mensaje de error
 *                          error:
 *                              type: string
 *                              description: Descripcion del error
 */
authRoutes.post("/", sanitizeAuthInput, login);
//# sourceMappingURL=auth.routes.js.map