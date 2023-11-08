import { Request, Response } from 'express';
import { orm } from '../shared/db/orm.js';
import { TipoProducto } from './tipoProducto.entity.js';


const em = orm.em;


async function findAll(req: Request, res: Response) {
  try {
    const tiposProducto = await em.find(TipoProducto, {})
    res.status(200).json({message: 'find all tipos producto', data: tiposProducto})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


async function findOne(req:Request, res:Response){
  try {
    const idTipo = Number.parseInt(req.params.idTipo)
    const tipoProducto = await em.findOneOrFail(TipoProducto, { idTipo })
    res.status(200).json({message: 'found tipo producto', data: tipoProducto})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


async function add(req: Request, res:Response) {
  try {
    const tipoProducto = em.create(TipoProducto, req.body)
    await em.flush()
    res.status(201).json({message: 'tipo producto created', data: tipoProducto})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


async function update(req: Request, res: Response){
  try {
    const idTipo = Number.parseInt(req.params.idTipo)
    const tipoProducto = em.findOneOrFail(TipoProducto, {idTipo})
    em.assign(tipoProducto, req.body)
    await em.flush()
    res.status(200).json({message: 'tipo producto updated'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function remove(req: Request, res: Response){
  try {
    const idTipo = Number.parseInt(req.params.idTipo)
    const tipoProducto = em.findOneOrFail(TipoProducto, {idTipo})
    await em.removeAndFlush(tipoProducto)
    res.status(200).send({message: 'tipo producto deleted'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


export {findAll, findOne, add, update, remove};