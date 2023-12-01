import { orm } from '../shared/db/orm.js';
import { Proveedor } from './proveedor.entity.js';
const em = orm.em;
async function findAll(req, res) {
    try {
        const proveedores = await em.find(Proveedor, {});
        res.status(200).json({ message: 'find all proveedores', data: proveedores });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function findOne(req, res) {
    try {
        const idProveedor = Number.parseInt(req.params.idProveedor);
        const proveedor = await em.findOneOrFail(Proveedor, { idProveedor });
        res.status(200).json({ message: 'found proveedor', data: proveedor });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const proveedor = em.create(Proveedor, req.body);
        await em.flush();
        res.status(201).json({ message: 'proveedor created', data: proveedor });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function update(req, res) {
    try {
        const idProveedor = Number.parseInt(req.params.idProveedor);
        const proveedor = em.findOneOrFail(Proveedor, { idProveedor });
        em.assign(proveedor, req.body);
        await em.flush();
        res.status(200).json({ message: 'proveedor updated' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function remove(req, res) {
    try {
        const idProveedor = Number.parseInt(req.params.idProveedor);
        const proveedor = await em.findOneOrFail(Proveedor, { idProveedor });
        await em.removeAndFlush(proveedor);
        res.status(200).send({ message: 'proveedor deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { findAll, findOne, add, update, remove };
//# sourceMappingURL=proveedor.controler.js.map