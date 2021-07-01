// ====================================================
//       Controller Flickr
// ====================================================
import { Request, Response } from "express";
import axios from 'axios';

//======================================
// Get flickr images data
//======================================
export const getFlickrImages = async(req: Request, res: Response) => {
    try {
        const response = await axios.post(`https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=cats`);
        const imageUrls : string[] = response.data.items.map((image: any) => image.link);
        return res.status(200).json({
            ok: true,
            imageUrls
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error del servidor',
            error
        });
    }
}
