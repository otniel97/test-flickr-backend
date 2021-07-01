// ===================================
//        Flickr Routes
// ===================================
import { Router } from 'express';
const router = Router();
import * as flickrController from '../controllers/flickr.controller';
import { authenticate } from '../middlewares/auth'

// ===================================
//  Get flickr images data     
// ===================================
router.post('/search/flicker', authenticate, flickrController.getFlickrImages);

export default router;