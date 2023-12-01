import { orm } from '../shared/db/orm.js';
import { Producto } from './producto.entity.js';
import { TipoProducto } from '../tipoProducto/tipoProducto.entity.js';
const em = orm.em;
function sanitizeProductoInput(req, res, next) {
    req.body.sanitizedInput = {
        idProducto: req.body.idProducto,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        tipoProducto: req.body.tipoProducto,
        stock: req.body.stock,
        imagen: req.body.imagen
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
        const filter = {};
        if (req.params.descripcion) {
            const descripcionParcial = req.params.descripcion;
            filter.descripcion = { $like: `%${descripcionParcial}%` };
        }
        const productos = await em.find(Producto, filter, { populate: ['tipoProducto'] });
        if (filter.descripcion) {
            res.status(200).json({ message: 'found productos that match', data: productos });
        }
        else {
            res.status(200).json({ message: 'found all productos', data: productos });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
/*
async function findSome(req: Request, res: Response){
  try {
    console.log("Llega al findsome");
    const descripcion = req.params.descripcion;

    const productos = await em.find(Producto, {descripcion: {$like: `%${descripcion}`}}, {populate: ['tipoProducto']})
    res.status(200).json({message: 'found all productos that match', data: productos})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}
*/
async function findOne(req, res) {
    try {
        const idProducto = Number.parseInt(req.params.idProducto);
        const producto = await em.findOneOrFail(Producto, { idProducto }, { populate: ['tipoProducto'] });
        res.status(200).json({ message: 'found producto', data: producto });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const productoData = req.body.sanitizedInput;
        if (productoData.tipoProducto) {
            const tipoExistente = await em.findOneOrFail(TipoProducto, productoData.tipoProducto.idTipo);
            productoData.tipoProducto = tipoExistente;
        }
        const producto = em.create(Producto, productoData);
        await em.flush();
        res.status(201).json({ message: 'producto created', data: producto });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function update(req, res) {
    try {
        const idProducto = Number.parseInt(req.params.idProducto);
        const producto = em.findOneOrFail(Producto, { idProducto });
        em.assign(producto, req.body.sanitizedInput);
        await em.flush();
        res.status(200).json({ message: 'producto updated', data: producto });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
;
async function remove(req, res) {
    try {
        const idProducto = Number.parseInt(req.params.idProducto);
        const producto = await em.findOneOrFail(Producto, { idProducto });
        await em.removeAndFlush(producto);
        res.status(200).send({ message: 'producto deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { sanitizeProductoInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=producto.controler.js.map