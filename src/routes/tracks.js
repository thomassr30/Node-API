import {Router} from "express";
import {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
} from '../controllers/tracks.js'
import {validatorCreateItem} from '../validators/tracks.js'

const router = Router()

router.get('/tracks', getItems)
router.get('/tracks/:id', getItem)
router.post('/tracks',validatorCreateItem , createItem)
router.put('/tracks/:id', updateItem)
router.delete('/tracks/id:', deleteItem)


export default router;