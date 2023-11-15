import { orm } from '../shared/db/orm.js';
import { Cliente } from './cliente.entity.js';
const em = orm.em;
async function findAll(req, res) {
    try {
        const clientes = await em.find(Cliente, {}, { populate: ['categoria'] });
        res.status(200).json({ message: 'found all clientes', data: clientes });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function findOne(req, res) {
    try {
        const idCliente = Number.parseInt(req.params.idCliente);
        const cliente = await em.findOneOrFail(Cliente, { idCliente }, { populate: ['categoria'] });
        res.status(200).json({ message: 'found cliente', data: cliente });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const cliente = em.create(Cliente, req.body);
        await em.flush();
        res.status(201).json({ message: 'cliente created', data: cliente });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function update(req, res) {
    try {
        const idCliente = Number.parseInt(req.params.idCliente);
        const cliente = em.findOneOrFail(Cliente, { idCliente });
        em.assign(cliente, req.body);
        await em.flush();
        res.status(200).json({ message: 'producto updated', data: cliente });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function remove(req, res) {
    try {
        const idCliente = Number.parseInt(req.params.idCliente);
        const cliente = em.findOneOrFail(Cliente, { idCliente });
        await em.removeAndFlush(cliente);
        res.status(200).send({ message: 'cliente deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { findAll, findOne, add, update, remove };
//# sourceMappingURL=cliente.controler.js.map