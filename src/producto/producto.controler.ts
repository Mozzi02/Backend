import { Request, Response, NextFunction } from 'express';
import { Producto } from './producto.entity.js';


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
  res.status(500).json({message: 'not implemented'});
};


async function findOne(req:Request, res:Response){
  res.status(500).json({message: 'not implemented'});
}


async function add(req: Request, res:Response) {
  res.status(500).json({message: 'not implemented'});
};


async function update(req: Request, res: Response){
  res.status(500).json({message: 'not implemented'});
};


async function remove(req: Request, res: Response){
  res.status(500).json({message: 'not implemented'});
}


export {sanitizeProductoInput, findAll, findOne, add, update, remove};