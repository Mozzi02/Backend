import { Router } from 'express';
import { findAll, findOne, add, update, remove, sanitizeEmpleadoInput } from './empleado.controler.js';
export const empleadoRoutes = Router();
empleadoRoutes.get('/', findAll);
empleadoRoutes.get('/:idEmpleado', findOne);
empleadoRoutes.post('/', sanitizeEmpleadoInput, add);
empleadoRoutes.put('/:idEmpleado', sanitizeEmpleadoInput, update);
empleadoRoutes.patch('/:idEmpleado', sanitizeEmpleadoInput, update);
empleadoRoutes.delete('/:idEmpleado', remove);
//# sourceMappingURL=empleado.routes.js.map