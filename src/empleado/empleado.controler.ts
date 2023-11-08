import { Request, Response, NextFunction } from 'express';
import { orm } from '../shared/db/orm.js';
import { Empleado } from './empleado.entity.js';


const em = orm.em;


async function findAll(req: Request, res: Response) {
  try {
    const empleados = await em.find(Empleado, {}, {populate: ['rol']})
    res.status(200).json({message: 'found all empleados', data: empleados})
  } catch (error: any){
    res.status(500).json({message: error.message})
  }
};


async function findOne(req:Request, res:Response){
  try {
    const idEmpleado = Number.parseInt(req.params.idEmpleado)
    const empleado = await em.findOneOrFail(Empleado, {idEmpleado}, {populate: ['rol']})
    res.status(200).json({message: 'found empleado', data: empleado})
  } catch (error: any){
    res.status(500).json({message: error.message})
  }
}


async function add(req: Request, res:Response) {
  try {
    const empleado = em.create(Empleado, req.body)
    await em.flush()
    res.status(201).json({message: 'empleado created', data: empleado})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function update(req: Request, res: Response){
  try {
    const idEmpleado = Number.parseInt(req.params.idEmpleado)
    const empleado = em.findOneOrFail(Empleado, {idEmpleado})
    em.assign(empleado, req.body)
    await em.flush()
    res.status(200).json({message: 'empleado updated', data: empleado})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function remove(req: Request, res: Response){
  try {
    const idEmpleado = Number.parseInt(req.params.idEmpleado)
    const empleado = em.findOneOrFail(Empleado, {idEmpleado})
    await em.removeAndFlush(empleado)
    res.status(200).send({message: 'empleado deleted'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


export {findAll, findOne, add, update, remove};