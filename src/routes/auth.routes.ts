// ===================================
//        Auth Routes
// ===================================
import { Router } from 'express';
const router = Router();
import * as authController from '../controllers/auth.controller';
import { authenticate } from '../middlewares/auth'

// ===================================
//  Get token  
// ===================================
router.get('/token', authController.getToken);

export default router;