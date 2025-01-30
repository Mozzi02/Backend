import { orm } from '../shared/db/orm.js';
import { Venta } from './venta.entity.js';
import { Cliente } from '../cliente/cliente.entity.js';
import { Empleado } from '../empleado/empleado.entity.js';
const em = orm.em;
function sanitizeVentaInput(req, res, next) {
    req.body.sanitizedInput = {
        idVenta: req.body.idVenta,
        fechaVenta: req.body.fechaVenta,
        cliente: req.body.cliente,
        empleado: req.body.empleado
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
        const ventaData = req.body.sanitizedInput;
        if (ventaData.cliente) {
            const clienteExistente = await em.findOneOrFail(Cliente, ventaData.cliente.idCliente);
            ventaData.cliente = clienteExistente;
        }
        if (ventaData.empleado) {
            const empleadoExistente = await em.findOneOrFail(Empleado, ventaData.empleado.idEmpleado);
            ventaData.empleado = empleadoExistente;
        }
        ventaData.fechaVenta = new Date();
        const venta = em.create(Venta, ventaData);
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
        const ventaData = req.body.sanitizedInput;
        if (ventaData.cliente) {
            const clienteExistente = await em.findOneOrFail(Cliente, ventaData.cliente.idCliente);
            ventaData.cliente = clienteExistente;
        }
        if (ventaData.empleado) {
            const empleadoExistente = await em.findOneOrFail(Empleado, ventaData.empleado.idEmpleado);
            ventaData.empleado = empleadoExistente;
        }
        const idVenta = Number.parseInt(req.params.idVenta);
        const venta = await em.findOneOrFail(Venta, { idVenta });
        const fechaVenta = new Date(ventaData.fechaVenta);
        ventaData.fechaVenta = fechaVenta;
        em.assign(venta, ventaData);
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
        const venta = await em.findOneOrFail(Venta, { idVenta }, { populate: ['lineasDeVenta'] });
        for (const lineaDeVenta of venta.lineasDeVenta.getItems()) {
            await em.removeAndFlush(lineaDeVenta);
        }
        await em.removeAndFlush(venta);
        res.status(200).send({ message: 'venta y lineas de venta asociadas deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { sanitizeVentaInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=venta.controler.js.map