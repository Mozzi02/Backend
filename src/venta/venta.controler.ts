import { Request, Response, NextFunction } from 'express';
import { orm } from '../shared/db/orm.js';
import { Venta } from './venta.entity.js';


const em = orm.em;


async function findAll(req: Request, res: Response) {
  try {
    const ventas = await em.find(Venta, {}, {populate: ['cliente', 'empleado']})
    res.status(200).json({message: 'found all ventas', data: ventas})
  } catch (error: any){
    res.status(500).json({message: error.message})
  }
};


async function findOne(req:Request, res:Response){
  try {
    const idVenta = Number.parseInt(req.params.idVenta)
    const venta = await em.findOneOrFail(Venta, {idVenta}, {populate: ['cliente', 'empleado']})
    res.status(200).json({message: 'found venta', data: venta})
  } catch (error: any){
    res.status(500).json({message: error.message})
  }
}


async function add(req: Request, res:Response) {
  try {
    const venta = em.create(Venta, req.body)
    await em.flush()
    res.status(201).json({message: 'venta created', data: venta})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function update(req: Request, res: Response){
  try {
    const idVenta = Number.parseInt(req.params.idVenta)
    const venta = em.findOneOrFail(Venta, {idVenta})
    em.assign(venta, req.body)
    await em.flush()
    res.status(200).json({message: 'venta updated', data: venta})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function remove(req: Request, res: Response){
  try {
    const idVenta = Number.parseInt(req.params.idVenta)
    const venta = em.findOneOrFail(Venta, {idVenta})
    await em.removeAndFlush(venta)
    res.status(200).send({message: 'venta deleted'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


export {findAll, findOne, add, update, remove};