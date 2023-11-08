import { orm } from '../shared/db/orm.js';
import { TipoProducto } from './tipoProducto.entity.js';
const em = orm.em;
async function findAll(req, res) {
    try {
        const tiposProducto = await em.find(TipoProducto, {});
        res.status(200).json({ message: 'find all tipos producto', data: tiposProducto });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function findOne(req, res) {
    res.status(500).json({ message: 'not implemented' });
}
async function add(req, res) {
    res.status(500).json({ message: 'not implemented' });
}
;
async function update(req, res) {
    res.status(500).json({ message: 'not implemented' });
}
;
async function remove(req, res) {
    res.status(500).json({ message: 'not implemented' });
}
export { findAll, findOne, add, update, remove };
//# sourceMappingURL=tipoProducto.controler.js.map