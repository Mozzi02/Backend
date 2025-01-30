import { Request, Response, NextFunction } from 'express';
import { orm } from '../shared/db/orm.js';
import { Categoria } from './categoria.entity.js';


const em = orm.em;

function sanitizeCategoriaInput(req: Request, res: Response, next: NextFunction){
  req.body.sanitizedInput = {
    idCategoria: req.body.idCategoria,
    descripcion: req.body.descripcion,
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
    const categorias = await em.find(Categoria, {})
    res.status(200).json({message: 'find all categorias', data: categorias})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


async function findOne(req:Request, res:Response){
  try {
    const idCategoria = Number.parseInt(req.params.idCategoria)
    const categoria = await em.findOneOrFail(Categoria, { idCategoria })
    res.status(200).json({message: 'found categoria', data: categoria})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


async function add(req: Request, res:Response) {
  try {
    const categoriaData = req.body.sanitizedInput;
    const categoria = em.create(Categoria, categoriaData)
    await em.flush()
    res.status(201).json({message: 'categoria created', data: categoria})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


async function update(req: Request, res: Response){
  try {
    const categoriaData = req.body.sanitizedInput;
    const idCategoria = Number.parseInt(req.params.idCategoria)
    const categoria = await em.findOneOrFail(Categoria, {idCategoria})
    em.assign(categoria, categoriaData)
    await em.flush()
    res.status(200).json({message: 'categoria updated', data: categoria})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function remove(req: Request, res: Response){
  try {
    const idCategoria = Number.parseInt(req.params.idCategoria)
    const categoria = await em.findOneOrFail(Categoria, {idCategoria})
    await em.removeAndFlush(categoria)
    res.status(200).send({message: 'categoria deleted'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


export {sanitizeCategoriaInput, findAll, findOne, add, update, remove};