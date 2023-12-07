import { orm } from '../shared/db/orm.js';
import { Categoria } from './categoria.entity.js';
const em = orm.em;
async function findAll(req, res) {
    try {
        const categorias = await em.find(Categoria, {});
        res.status(200).json({ message: 'find all categorias', data: categorias });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function findOne(req, res) {
    try {
        const idCategoria = Number.parseInt(req.params.idCategoria);
        const categoria = await em.findOneOrFail(Categoria, { idCategoria });
        res.status(200).json({ message: 'found categoria', data: categoria });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const categoria = em.create(Categoria, req.body);
        await em.flush();
        res.status(201).json({ message: 'categoria created', data: categoria });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function update(req, res) {
    try {
        const idCategoria = Number.parseInt(req.params.idCategoria);
        const categoria = await em.findOneOrFail(Categoria, { idCategoria });
        em.assign(categoria, req.body);
        await em.flush();
        res.status(200).json({ message: 'categoria updated' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function remove(req, res) {
    try {
        const idCategoria = Number.parseInt(req.params.idCategoria);
        const categoria = await em.findOneOrFail(Categoria, { idCategoria });
        await em.removeAndFlush(categoria);
        res.status(200).send({ message: 'categoria deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { findAll, findOne, add, update, remove };
//# sourceMappingURL=categoria.controler.js.map