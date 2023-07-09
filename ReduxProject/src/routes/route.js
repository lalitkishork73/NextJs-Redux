import { Router } from "express";
const router = Router();
import control from '../controllers/wishController.js'

router.get('/data', control.wishData)
router.get('/about', control.wishAbout)
router.post('/sent', control.wishSent)
router.delete('/remove/:id', control.wishRemove)


export default router;