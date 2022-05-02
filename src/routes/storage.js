import {Router} from "express";
import {uploadMiddleware} from '../utils/handleStorage.js'
import {createItem} from '../controllers/storage.js'
const router = Router()

router.post('/storage',uploadMiddleware.single('myfile'),createItem)

export default router