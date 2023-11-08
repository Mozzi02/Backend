import { Request, Response } from 'express';
import { orm } from '../shared/db/orm.js';
import { Proveedor } from './proveedor.entity.js';


const em = orm.em;


async function findAll(req: Request, res: Response) {
  try {
    const proveedores = await em.find(Proveedor, {})
    res.status(200).json({message: 'find all proveedores', data: proveedores})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


async function findOne(req:Request, res:Response){
  try {
    const idProveedor = Number.parseInt(req.params.idProveedor)
    const proveedor = await em.findOneOrFail(Proveedor, { idProveedor })
    res.status(200).json({message: 'found proveedor', data: proveedor})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


async function add(req: Request, res:Response) {
  try {
    const proveedor = em.create(Proveedor, req.body)
    await em.flush()
    res.status(201).json({message: 'proveedor created', data: proveedor})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


async function update(req: Request, res: Response){
  try {
    const idProveedor = Number.parseInt(req.params.idProveedor)
    const proveedor = em.findOneOrFail(Proveedor, {idProveedor})
    em.assign(proveedor, req.body)
    await em.flush()
    res.status(200).json({message: 'proveedor updated'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function remove(req: Request, res: Response){
  try {
    const idProveedor = Number.parseInt(req.params.idProveedor)
    const proveedor = em.findOneOrFail(Proveedor, {idProveedor})
    await em.removeAndFlush(proveedor)
    res.status(200).send({message: 'proveedor deleted'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


export {findAll, findOne, add, update, remove};