import {Router} from "express";
import {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
} from '../controllers/tracks.js'

const router = Router()

router.get('/tracks', getItems)
router.get('/tracks/:id', getItem)
router.post('/tracks', createItem)
router.put('/tracks', updateItem)
router.delete('/tracks', deleteItem)


export default router;