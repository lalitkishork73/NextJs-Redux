import { Router } from 'express';
import { createUser, userLogin } from '../controllers/userControl.js';
import { createToDo, getToDo ,removeToDo} from '../controllers/todoControl.js'
import { authentication } from '../middleware/auth.js'


const router = Router();

router.post('/signup', createUser);
router.post('/login', userLogin);

router.post('/createtodo', authentication, createToDo)
router.get('/todos', authentication, getToDo)
router.delete('/remove/:id', authentication, removeToDo)


export default router; 