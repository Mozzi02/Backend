import { Request, Response, NextFunction} from 'express';
import { orm } from '../shared/db/orm.js';
import { LineaDeVenta } from './lineaDeVenta.entity.js';
import { Producto } from '../producto/producto.entity.js';
import { Venta } from '../venta/venta.entity.js';


const em = orm.em;

function sanitizeLineaInput(req: Request, res: Response, next: NextFunction){
  req.body.sanitizedInput = {
    idLineaVenta: req.body.idLineaVenta,
    cantidad: req.body.cantidad,
    producto: req.body.producto,
    venta: req.body.venta
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
    const lineas = await em.find(LineaDeVenta, {}, {populate: ['venta', 'producto']})
    res.status(200).json({message: 'found all lineas', data: lineas})
  } catch (error: any){
    res.status(500).json({message: error.message})
  }
};


async function findOne(req:Request, res:Response){
  try {
    const idLineaVenta = Number.parseInt(req.params.idLineaVenta)
    const linea = await em.findOneOrFail(LineaDeVenta, {idLineaVenta}, {populate: ['venta', 'producto']})
    res.status(200).json({message: 'found linea', data: linea})
  } catch (error: any){
    res.status(500).json({message: error.message})
  }
}

async function findSome(req:Request, res:Response){
  try {
    const idVenta = req.params;
    const lineas = await em.find(LineaDeVenta, {venta: idVenta}, {populate: ['venta','producto']})
    res.status(200).json({message: 'found all lineas that match', data: lineas})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}

async function add(req: Request, res:Response) {
  try {
    const lineaData = req.body.sanitizedInput;

    if(lineaData.producto){
      const productoExistente = await em.findOneOrFail(Producto, lineaData.producto.idProducto);
      lineaData.producto = productoExistente;
    }

    if(lineaData.venta){
      const ventaExistente = await em.findOneOrFail(Venta, lineaData.venta.idVenta);
      lineaData.venta = ventaExistente;
    }

    const linea = em.create(LineaDeVenta, lineaData)
    await em.flush()
    res.status(201).json({message: 'linea created', data: linea})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function update(req: Request, res: Response){
  try {
    const lineaData = req.body.sanitizedInput;

    if(lineaData.producto){
      const productoExistente = await em.findOneOrFail(Producto, lineaData.producto.idProducto);
      lineaData.producto = productoExistente;
    }

    if(lineaData.venta){
      const ventaExistente = await em.findOneOrFail(Venta, lineaData.venta.idVenta);
      lineaData.venta = ventaExistente;
    }  

    const idLineaVenta = Number.parseInt(req.params.idLineaVenta)
    const linea = await em.findOneOrFail(LineaDeVenta, {idLineaVenta})

    em.assign(linea, lineaData)
    await em.flush()
    res.status(200).json({message: 'linea updated', data: linea})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function remove(req: Request, res: Response){
  try {
    const idLineaVenta = Number.parseInt(req.params.idLineaVenta)
    const linea = await em.findOneOrFail(LineaDeVenta, {idLineaVenta})
    await em.removeAndFlush(linea)
    res.status(200).send({message: 'linea deleted'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


export {sanitizeLineaInput, findAll, findOne, findSome, add, update, remove};