import { Request, Response, NextFunction } from 'express';
import { orm } from '../shared/db/orm.js';
import { Empleado } from './empleado.entity.js';
import { Rol } from '../rol/rol.entity.js';


const em = orm.em;

function sanitizeEmpleadoInput(req: Request, res: Response, next: NextFunction){
  req.body.sanitizedInput = {
    idEmpleado: req.body.idEmpleado,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    email: req.body.email,
    direccion: req.body.direccion,
    dni: req.body.dni,
    rol: req.body.rol,
    password: req.body.password
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
    const empleadoData = req.body.sanitizedInput;

    if (empleadoData.rol){
      const rolExistente = await em.findOneOrFail(Rol, empleadoData.rol.idRol);

      if (rolExistente){
        empleadoData.rol = rolExistente;
      }
    }

    const empleado = em.create(Empleado, empleadoData)
    await em.flush()
    res.status(201).json({message: 'empleado created', data: empleado})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function update(req: Request, res: Response){
  try {
    const empleadoData = req.body.sanitizedInput;
    const idEmpleado = Number.parseInt(req.params.idEmpleado)
    const empleado = await em.findOneOrFail(Empleado, {idEmpleado})
    em.assign(empleado, empleadoData)
    await em.flush()
    res.status(200).json({message: 'empleado updated', data: empleado})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
};


async function remove(req: Request, res: Response){
  try {
    const idEmpleado = Number.parseInt(req.params.idEmpleado)
    const empleado = await em.findOneOrFail(Empleado, {idEmpleado})
    await em.removeAndFlush(empleado)
    res.status(200).send({message: 'empleado deleted'})
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}


export {sanitizeEmpleadoInput, findAll, findOne, add, update, remove};