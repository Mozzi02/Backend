import { Router } from 'express';
import { findAll, findOne, add, update, remove, sanitizeEmpleadoInput } from './empleado.controler.js';
import { verifyToken, isAdmin } from '../auth/auth.controler.js';
export const empleadoRoutes = Router();
empleadoRoutes.get('/', verifyToken, isAdmin, findAll);
empleadoRoutes.get('/:idEmpleado', verifyToken, isAdmin, findOne);
empleadoRoutes.post('/', sanitizeEmpleadoInput, verifyToken, isAdmin, add);
empleadoRoutes.put('/:idEmpleado', sanitizeEmpleadoInput, verifyToken, isAdmin, update);
empleadoRoutes.patch('/:idEmpleado', sanitizeEmpleadoInput, verifyToken, isAdmin, update);
empleadoRoutes.delete('/:idEmpleado', verifyToken, isAdmin, remove);
//# sourceMappingURL=empleado.routes.js.map