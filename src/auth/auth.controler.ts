import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { orm } from '../shared/db/orm.js'; 
import { Empleado } from '../empleado/empleado.entity.js'; 

const em = orm.em;
const SECRET_KEY = "mi_clave_secreta"; 

interface AuthenticatedRequest extends Request {
    empleado?: Empleado; 
}

function sanitizeAuthInput(req: Request, res: Response, next: NextFunction){
  req.body.sanitizedInput = {
    email: req.body.email,
    password: req.body.password
  }
  Object.keys(req.body.sanitizedInput).forEach(key => {
    if(req.body.sanitizedInput[key] === undefined) {
      delete req.body.sanitizedInput[key];
    }
  })
  next();
};

export async function login(req: Request, res: Response) {
    try {
        const data = req.body.sanitizedInput;
        const email = data.email;
        const password = data.password;

        const empleado = await em.findOneOrFail(Empleado, {email});

        if (!empleado) {
            return res.status(401).json({ message: "Emplaedo no existente" });
        }

        
        const passwordValid = (password === empleado.password);
        if (!passwordValid) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        
        const token = jwt.sign(
            { id: empleado.idEmpleado, rol: empleado.rol }, 
            SECRET_KEY, 
            { expiresIn: "2h" } 
        );

        res.status(200).json({
            message: "Login exitoso",
            token,
            usuario: { id: empleado.idEmpleado, email: empleado.email, rol: empleado.rol }
        });

    } catch (error: any) {
        res.status(500).json({ message: "Error en el servidor", error: error.message });
    }
}

async function verifyToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Acceso denegado. Token no proporcionado" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY) as any; 
        const empleado = await em.findOneOrFail(Empleado, { idEmpleado: decoded.id });
        if (!empleado) {
            return res.status(401).json({ message: "Acceso denegado, usuario no encontrado" });
        }

        req.empleado = empleado; 
        next();
    } catch (error) {
        console.log("Error al verificar token:", error); 
        return res.status(401).json({ message: "Token inválido o expirado" });
    }
}


export function isAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (!req.empleado) {
        return res.status(403).json({ message: "No information available" });
    }
    
    if (req.empleado.rol.idRol !== 1) {
        return res.status(403).json({ message: "Acceso denegado" });
    }
    next();
}

export {sanitizeAuthInput, verifyToken};
