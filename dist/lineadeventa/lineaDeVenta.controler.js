import { orm } from '../shared/db/orm.js';
import { LineaDeVenta } from './lineaDeVenta.entity.js';
const em = orm.em;
async function findAll(req, res) {
    try {
        const lineas = await em.find(LineaDeVenta, {}, { populate: ['venta', 'producto'] });
        res.status(200).json({ message: 'found all lineas', data: lineas });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function findOne(req, res) {
    try {
        const idLineaVenta = Number.parseInt(req.params.idLineaVenta);
        const linea = await em.findOneOrFail(LineaDeVenta, { idLineaVenta }, { populate: ['venta', 'producto'] });
        res.status(200).json({ message: 'found linea', data: linea });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const linea = em.create(LineaDeVenta, req.body);
        await em.flush();
        res.status(201).json({ message: 'linea created', data: linea });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function update(req, res) {
    try {
        const idLineaVenta = Number.parseInt(req.params.idLineaVenta);
        const linea = em.findOneOrFail(LineaDeVenta, { idLineaVenta });
        em.assign(linea, req.body);
        await em.flush();
        res.status(200).json({ message: 'linea updated', data: linea });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function remove(req, res) {
    try {
        const idLineaVenta = Number.parseInt(req.params.idLineaVenta);
        const linea = em.findOneOrFail(LineaDeVenta, { idLineaVenta });
        await em.removeAndFlush(linea);
        res.status(200).send({ message: 'linea deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { findAll, findOne, add, update, remove };
//# sourceMappingURL=lineaDeVenta.controler.js.map