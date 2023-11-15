import { Router } from 'express';
import { findAll, findOne, add, update, remove } from './empleado.controler.js';
export const empleadoRoutes = Router();
empleadoRoutes.get('/', findAll);
empleadoRoutes.get('/:idEmpleado', findOne);
empleadoRoutes.post('/', add);
empleadoRoutes.put('/:idEmpleado', update);
empleadoRoutes.patch('/:idEmpleado', update);
empleadoRoutes.delete('/:idEmpleado', remove);
//# sourceMappingURL=empleado.routes.js.map