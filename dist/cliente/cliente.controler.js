import { orm } from '../shared/db/orm.js';
import { Cliente } from './cliente.entity.js';
import { Categoria } from '../categoria/categoria.entity.js';
const em = orm.em;
function sanitizeClienteInput(req, res, next) {
    req.body.sanitizedInput = {
        idCliente: req.body.idCliente,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion,
        cuit: req.body.cuit,
        categoria: req.body.categoria
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
        const clienteData = req.body.sanitizedInput;
        if (clienteData.categoria) {
            const categoriaExistente = await em.findOneOrFail(Categoria, clienteData.categoria.idCategoria);
            if (categoriaExistente) {
                clienteData.categoria = categoriaExistente;
            }
        }
        const cliente = em.create(Cliente, clienteData);
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
        const clienteData = req.body.sanitizedInput;
        const idCliente = Number.parseInt(req.params.idCliente);
        const cliente = await em.findOneOrFail(Cliente, { idCliente });
        em.assign(cliente, clienteData);
        await em.flush();
        res.status(200).json({ message: 'cliente updated', data: cliente });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function remove(req, res) {
    try {
        const idCliente = Number.parseInt(req.params.idCliente);
        const cliente = await em.findOneOrFail(Cliente, { idCliente });
        await em.removeAndFlush(cliente);
        res.status(200).send({ message: 'cliente deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { sanitizeClienteInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=cliente.controler.js.map