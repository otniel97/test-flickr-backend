// ===================================
//        Auth Routes
// ===================================
import { Router } from 'express';
const router = Router();
import * as authController from '../controllers/auth.controller';

// ===================================
//  Get token  
// ===================================
router.get('/token', authController.getToken);

export default router;