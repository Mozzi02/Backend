import { Request, Response, NextFunction } from 'express';
import { ProductoRepository } from './producto.repository.js';
import { Producto } from './producto.entity.js';


const repository = new ProductoRepository();


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
  res.json({ data: await repository.findAll() })
};


async function findOne(req:Request, res:Response){
  const idProducto = req.params.idProducto;
  const producto = await repository.findOne({idProducto})
  if (!producto) {
    return res.status(404).send({message: 'Producto not found'});
  }
  res.json({data: producto});
}


function add(req: Request, res:Response) {
  const input = req.body.sanitizedInput;
  const productoInput = new Producto(input.idProducto, input.descripcion, input.precio, input.idTipo, input.stock, input.imagen);
  const producto = repository.add(productoInput)
  return res.status(201).send({ message: 'Producto created', data: producto })
};


function update(req: Request, res: Response){
  req.body.sanitizedInput.idProducto = req.params.idProducto;
  const producto = repository.update(req.body.sanitizedInput)
  if(!producto) {
    return res.status(404).send({message: 'Producto not found'})
  }
  return res.status(200).send({message: 'Producto updated succesfully', data: producto});
};


function remove(req: Request, res: Response){
  const id = req.params.idProducto;
  const producto = repository.delete({id});
  if(!producto){
    res.status(404).send({message: 'Producto not found'})
  } else {
    res.status(200).send({message: 'Producto deleted succesfully'})
  }
}


export {sanitizeProductoInput, findAll, findOne, add, update, remove};