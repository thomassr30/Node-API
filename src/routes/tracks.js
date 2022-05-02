import {Router} from "express";

const router = Router()

router.get('/tracks', (req, res) => {
    res.send('Hola')
})


export default router;