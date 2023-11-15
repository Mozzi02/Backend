import { orm } from '../shared/db/orm.js';
import { Venta } from './venta.entity.js';
const em = orm.em;
async function findAll(req, res) {
    try {
        const ventas = await em.find(Venta, {}, { populate: ['cliente', 'empleado'] });
        res.status(200).json({ message: 'found all ventas', data: ventas });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function findOne(req, res) {
    try {
        const idVenta = Number.parseInt(req.params.idVenta);
        const venta = await em.findOneOrFail(Venta, { idVenta }, { populate: ['cliente', 'empleado'] });
        res.status(200).json({ message: 'found venta', data: venta });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const venta = em.create(Venta, req.body);
        await em.flush();
        res.status(201).json({ message: 'venta created', data: venta });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function update(req, res) {
    try {
        const idVenta = Number.parseInt(req.params.idVenta);
        const venta = em.findOneOrFail(Venta, { idVenta });
        em.assign(venta, req.body);
        await em.flush();
        res.status(200).json({ message: 'venta updated', data: venta });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function remove(req, res) {
    try {
        const idVenta = Number.parseInt(req.params.idVenta);
        const venta = em.findOneOrFail(Venta, { idVenta });
        await em.removeAndFlush(venta);
        res.status(200).send({ message: 'venta deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { findAll, findOne, add, update, remove };
//# sourceMappingURL=venta.controler.js.map