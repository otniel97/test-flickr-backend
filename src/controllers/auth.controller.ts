// ====================================================
//       Controller Auth
// ====================================================
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

//======================================
// Get token
//======================================
export const getToken = async(req: Request, res: Response) => {
    try {
        const token: string = jwt.sign({ id: 2323}, process.env.SEED || 'secret-backend', { expiresIn: 60 * 60 * 24 })
        return res.status(200).json({
            ok: true,
            token
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error del servidor',
            error
        });
    }
}

