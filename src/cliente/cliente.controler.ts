import { Request, Response, NextFunction } from 'express';
import { orm } from '../shared/db/orm.js';
import { Cliente } from './cliente.entity.js';


const em = orm.em;


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
    const cliente = em.create(Cliente, req.body)
    await em.flush()
    res.status(201).json({message: 'cliente created', data: cliente})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function update(req: Request, res: Response){
  try {
    const idCliente = Number.parseInt(req.params.idCliente)
    const cliente = em.findOneOrFail(Cliente, {idCliente})
    em.assign(cliente, req.body)
    await em.flush()
    res.status(200).json({message: 'producto updated', data: cliente})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function remove(req: Request, res: Response){
  try {
    const idCliente = Number.parseInt(req.params.idCliente)
    const cliente = em.findOneOrFail(Cliente, {idCliente})
    await em.removeAndFlush(cliente)
    res.status(200).send({message: 'cliente deleted'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


export {findAll, findOne, add, update, remove};