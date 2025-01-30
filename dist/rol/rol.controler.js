import { orm } from '../shared/db/orm.js';
import { Rol } from './rol.entity.js';
const em = orm.em;
function sanitizeRolInput(req, res, next) {
    req.body.sanitizedInput = {
        idRol: req.body.idRol,
        descripcion: req.body.descripcion
    };
    Object.keys(req.body.sanitizedInput).forEach(key => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key];
        }
    });
    next();
}
;
async function findAll(req, res) {
    try {
        const roles = await em.find(Rol, {});
        res.status(200).json({ message: 'find all roles', data: roles });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function findOne(req, res) {
    try {
        const idRol = Number.parseInt(req.params.idRol);
        const rol = await em.findOneOrFail(Rol, { idRol });
        res.status(200).json({ message: 'found rol', data: rol });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const rolData = req.body.sanitizedInput;
        const rol = em.create(Rol, rolData);
        await em.flush();
        res.status(201).json({ message: 'rol created', data: rol });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function update(req, res) {
    try {
        const rolData = req.body.sanitizedInput;
        const idRol = Number.parseInt(req.params.idRol);
        const rol = await em.findOneOrFail(Rol, { idRol });
        em.assign(rol, rolData);
        await em.flush();
        res.status(200).json({ message: 'rol updated', data: rol });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function remove(req, res) {
    try {
        const idRol = Number.parseInt(req.params.idRol);
        const rol = await em.findOneOrFail(Rol, { idRol });
        await em.removeAndFlush(rol);
        res.status(200).send({ message: 'rol deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { sanitizeRolInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=rol.controler.js.map