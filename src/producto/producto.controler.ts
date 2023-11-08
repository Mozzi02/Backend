import { Request, Response, NextFunction } from 'express';
import { orm } from '../shared/db/orm.js';
import { Producto } from './producto.entity.js';


const em = orm.em;


function sanitizeProductoInput(req: Request, res: Response, next: NextFunction){
  req.body.sanitizedInput = {
    idProducto: req.body.idProducto,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    idTipo: req.body.idTipo,
    stock: req.body.stock,
    imagen: req.body.imagen
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
    const productos = await em.find(Producto, {}, {populate: ['tipoProducto']})
    res.status(200).json({message: 'found all productos', data: productos})
  } catch (error: any){
    res.status(500).json({message: error.message})
  }
};


async function findOne(req:Request, res:Response){
  try {
    const idProducto = Number.parseInt(req.params.idProducto)
    const producto = await em.findOneOrFail(Producto, {idProducto}, {populate: ['tipoProducto']})
    res.status(200).json({message: 'found producto', data: producto})
  } catch (error: any){
    res.status(500).json({message: error.message})
  }
}


async function add(req: Request, res:Response) {
  try {
    const producto = em.create(Producto, req.body.sanitizedInput)
    await em.flush()
    res.status(201).json({message: 'producto created', data: producto})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function update(req: Request, res: Response){
  try {
    const idProducto = Number.parseInt(req.params.idProducto)
    const producto = em.findOneOrFail(Producto, {idProducto})
    em.assign(producto, req.body.sanitizedInput)
    await em.flush()
    res.status(200).json({message: 'producto updated', data: producto})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function remove(req: Request, res: Response){
  try {
    const idProducto = Number.parseInt(req.params.idProducto)
    const producto = em.findOneOrFail(Producto, {idProducto})
    await em.removeAndFlush(producto)
    res.status(200).send({message: 'producto deleted'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


export {sanitizeProductoInput, findAll, findOne, add, update, remove};