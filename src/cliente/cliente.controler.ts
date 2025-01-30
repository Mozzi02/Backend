import { Request, Response, NextFunction } from 'express';
import { orm } from '../shared/db/orm.js';
import { Cliente } from './cliente.entity.js';
import { Categoria } from '../categoria/categoria.entity.js';


const em = orm.em;

function sanitizeClienteInput(req: Request, res: Response, next: NextFunction){
  req.body.sanitizedInput = {
    idCliente: req.body.idCliente,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    email: req.body.email,
    direccion: req.body.direccion,
    cuit: req.body.cuit,
    categoria: req.body.categoria
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
    const clientes = await em.find(Cliente, {}, {populate: ['categoria']})
    res.status(200).json({message: 'found all clientes', data: clientes})
  } catch (error: any){
    res.status(500).json({message: error.message})
  }
};


async function findOne(req:Request, res:Response){
  try {
    const idCliente = Number.parseInt(req.params.idCliente)
    const cliente = await em.findOneOrFail(Cliente, {idCliente}, {populate: ['categoria']})
    res.status(200).json({message: 'found cliente', data: cliente})
  } catch (error: any){
    res.status(500).json({message: error.message})
  }
}


async function add(req: Request, res:Response) {
  try {
    const clienteData = req.body.sanitizedInput;

    if (clienteData.categoria){
      const categoriaExistente = await em.findOneOrFail(Categoria, clienteData.categoria.idCategoria);

      if (categoriaExistente){
        clienteData.categoria = categoriaExistente;
      }
    }

    const cliente = em.create(Cliente, clienteData)
    await em.flush()
    res.status(201).json({message: 'cliente created', data: cliente})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function update(req: Request, res: Response){
  try {
    const clienteData = req.body.sanitizedInput;
    const idCliente = Number.parseInt(req.params.idCliente)
    const cliente = await em.findOneOrFail(Cliente, {idCliente})
    em.assign(cliente, clienteData)
    await em.flush()
    res.status(200).json({message: 'cliente updated', data: cliente})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function remove(req: Request, res: Response){
  try {
    const idCliente = Number.parseInt(req.params.idCliente)
    const cliente = await em.findOneOrFail(Cliente, {idCliente})
    await em.removeAndFlush(cliente)
    res.status(200).send({message: 'cliente deleted'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


export {sanitizeClienteInput, findAll, findOne, add, update, remove};