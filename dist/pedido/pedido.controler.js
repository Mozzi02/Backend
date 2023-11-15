import { orm } from '../shared/db/orm.js';
import { Pedido } from './pedido.entity.js';
const em = orm.em;
async function findAll(req, res) {
    try {
        const pedidos = await em.find(Pedido, {}, { populate: ['proveedor', 'empleado', 'producto'] });
        res.status(200).json({ message: 'found all pedidos', data: pedidos });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function findOne(req, res) {
    try {
        const idPedido = Number.parseInt(req.params.idPedido);
        const pedido = await em.findOneOrFail(Pedido, { idPedido }, { populate: ['proveedor', 'empleado', 'producto'] });
        res.status(200).json({ message: 'found pedido', data: pedido });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const pedido = em.create(Pedido, req.body);
        await em.flush();
        res.status(201).json({ message: 'pedido created', data: pedido });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function update(req, res) {
    try {
        const idPedido = Number.parseInt(req.params.idPedido);
        const pedido = em.findOneOrFail(Pedido, { idPedido });
        em.assign(pedido, req.body);
        await em.flush();
        res.status(200).json({ message: 'pedido updated', data: pedido });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function remove(req, res) {
    try {
        const idPedido = Number.parseInt(req.params.idPedido);
        const pedido = em.findOneOrFail(Pedido, { idPedido });
        await em.removeAndFlush(pedido);
        res.status(200).send({ message: 'pedido deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { findAll, findOne, add, update, remove };
//# sourceMappingURL=pedido.controler.js.map