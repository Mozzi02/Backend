import { Request, Response, NextFunction } from 'express';
import { orm } from '../shared/db/orm.js';
import { Pedido } from './pedido.entity.js';
import { Empleado } from '../empleado/empleado.entity.js';
import { Proveedor } from '../proveedor/proveedor.entity.js';
import { Producto } from '../producto/producto.entity.js';


const em = orm.em;

function sanitizePedidoInput(req: Request, res: Response, next: NextFunction){
  req.body.sanitizedInput = {
    idPedido: req.body.idPedido,
    fechaPedido: req.body.fechaPedido,
    cantidad: req.body.cantidad,
    estado: req.body.estado,
    proveedor: req.body.proveedor,
    empleado: req.body.empleado,
    producto: req.body.producto
  }
  Object.keys(req.body.sanitizedInput).forEach(key => {
    if(req.body.sanitizedInput[key] === undefined) {
      delete req.body.sanitizedInput[key];
    }
  })
  next();
};

async function findAll(req: Request, res: Response) {
  try {
    const pedidos = await em.find(Pedido, {}, {populate: ['proveedor', 'empleado', 'producto']})
    res.status(200).json({message: 'found all pedidos', data: pedidos})
  } catch (error: any){
    res.status(500).json({message: error.message})
  }
};


async function findOne(req:Request, res:Response){
  try {
    const idPedido = Number.parseInt(req.params.idPedido)
    const pedido = await em.findOneOrFail(Pedido, {idPedido}, {populate: ['proveedor', 'empleado', 'producto']})
    res.status(200).json({message: 'found pedido', data: pedido})
  } catch (error: any){
    res.status(500).json({message: error.message})
  }
}


async function add(req: Request, res:Response) {
  try {
    const pedidoData = req.body.sanitizedInput;

    if (pedidoData.empleado){
      const empleadoExistente = await em.findOneOrFail(Empleado, pedidoData.empleado.idEmpleado);
        pedidoData.empleado = empleadoExistente;
    }

    if (pedidoData.proveedor){
      const proveedorExistente = await em.findOneOrFail(Proveedor, pedidoData.proveedor.idProveedor);
        pedidoData.proveedor = proveedorExistente;
    }

    if (pedidoData.producto){
      const productoExistente = await em.findOneOrFail(Producto, pedidoData.producto.idProducto);
        pedidoData.producto = productoExistente;
    }

    pedidoData.fechaPedido = new Date();

    const pedido = em.create(Pedido, pedidoData)
    await em.flush()
    res.status(201).json({message: 'pedido created', data: pedido})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function update(req: Request, res: Response){
  try {
    const pedidoData = req.body.sanitizedInput;

    const idPedido = Number.parseInt(req.params.idPedido)
    const pedido = await em.findOneOrFail(Pedido, {idPedido})

    const fechaPedido = new Date(pedidoData.fechaPedido);

    pedidoData.fechaPedido = fechaPedido;

    em.assign(pedido, pedidoData)
    await em.flush()
    res.status(200).json({message: 'pedido updated', data: pedido})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function remove(req: Request, res: Response){
  try {
    const idPedido = Number.parseInt(req.params.idPedido)
    const pedido = await em.findOneOrFail(Pedido, {idPedido})
    await em.removeAndFlush(pedido)
    res.status(200).send({message: 'pedido deleted'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


export {sanitizePedidoInput, findAll, findOne, add, update, remove};