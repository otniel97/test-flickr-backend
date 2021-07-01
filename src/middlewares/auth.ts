// ====================================================
//      Middleware Auth
// ====================================================
import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

//======================================
// Middleware de autenticación
//======================================
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    
    if (!req.headers.authorization) {
        return res.status(401).json({
            ok: false,
            message: "No se ha encontrado header de autorización"
        });
    }

    const token: string = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.SEED || 'secret-backend', (error, data) => {
        if (error) {
            return res.status(401).json({
                ok: false,
                message: "Su sesión ha expirado",
                error: error.name
            });
        }
    });
    next();
}
