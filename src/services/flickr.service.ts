// ====================================================
//       Service Flickr
// ====================================================
import { RequestHandler } from 'express'

//======================================
// Get flickr images data
//======================================
export const getFlickrImages: RequestHandler = async (req,res) => {
    res.json('ffs')
}
