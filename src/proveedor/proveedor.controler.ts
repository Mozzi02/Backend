import { Request, Response, NextFunction } from 'express';
import { orm } from '../shared/db/orm.js';
import { Proveedor } from './proveedor.entity.js';


const em = orm.em;

function sanitizeProveedorInput(req: Request, res: Response, next: NextFunction){
  req.body.sanitizedInput = {
    idProveedor: req.body.idProveedor,
    cuit: req.body.cuit,
    razonSocial: req.body.razonSocial,
    telefono: req.body.telefono,
    email: req.body.email
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

async function findSome(req: Request, res:Response){
  try {
    const {razonSocial} = req.params;

    const proveedores = await em.find(Proveedor, {razonSocial: {$like: `%${razonSocial}%`}}, {})
    res.status(200).json({message: 'found all proveedores that match', data: proveedores})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}

async function add(req: Request, res:Response) {
  try {
    const proveedorData = req.body.sanitizedInput;
    const proveedor = em.create(Proveedor, proveedorData)
    await em.flush()
    res.status(201).json({message: 'proveedor created', data: proveedor})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


async function update(req: Request, res: Response){
  try {
    const proveedorData = req.body.sanitizedInput;
    const idProveedor = Number.parseInt(req.params.idProveedor)
    const proveedor = await em.findOneOrFail(Proveedor, {idProveedor})
    em.assign(proveedor, proveedorData)
    await em.flush()
    res.status(200).json({message: 'proveedor updated', data: proveedor})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function remove(req: Request, res: Response){
  try {
    const idProveedor = Number.parseInt(req.params.idProveedor)
    const proveedor = await em.findOneOrFail(Proveedor, {idProveedor})
    await em.removeAndFlush(proveedor)
    res.status(200).send({message: 'proveedor deleted'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


export {sanitizeProveedorInput, findAll, findOne, findSome, add, update, remove};