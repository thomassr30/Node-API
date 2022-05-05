import {Router} from "express";
import {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
} from '../controllers/tracks.js'
import {validatorCreateItem} from '../validators/tracks.js'
import {customHeader} from '../middleware/customHeader.js'

const router = Router()

router.get('/tracks', getItems)
router.get('/tracks/:id', getItem)
router.post('/tracks',validatorCreateItem, customHeader , createItem)
router.put('/tracks/:id', updateItem)
router.delete('/tracks/id:', deleteItem)


export default router;