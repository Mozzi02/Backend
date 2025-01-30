import { orm } from '../shared/db/orm.js';
import { TipoProducto } from './tipoProducto.entity.js';
const em = orm.em;
function sanitizeTipoProductoInput(req, res, next) {
    req.body.sanitizedInput = {
        idTipo: req.body.idTipo,
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
        const tiposProducto = await em.find(TipoProducto, {});
        res.status(200).json({ message: 'find all tipos producto', data: tiposProducto });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function findOne(req, res) {
    try {
        const idTipo = Number.parseInt(req.params.idTipo);
        const tipoProducto = await em.findOneOrFail(TipoProducto, { idTipo });
        res.status(200).json({ message: 'found tipo producto', data: tipoProducto });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const tipoData = req.body.sanitizedInput;
        const tipoProducto = em.create(TipoProducto, tipoData);
        await em.flush();
        res.status(201).json({ message: 'tipo producto created', data: tipoProducto });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function update(req, res) {
    try {
        const tipoData = req.body.sanitizedInput;
        const idTipo = Number.parseInt(req.params.idTipo);
        const tipoProducto = await em.findOneOrFail(TipoProducto, { idTipo });
        em.assign(tipoProducto, tipoData);
        await em.flush();
        res.status(200).json({ message: 'tipo producto updated' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function remove(req, res) {
    try {
        const idTipo = Number.parseInt(req.params.idTipo);
        const tipoProducto = await em.findOneOrFail(TipoProducto, { idTipo });
        await em.removeAndFlush(tipoProducto);
        res.status(200).send({ message: 'tipo producto deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { sanitizeTipoProductoInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=tipoProducto.controler.js.map