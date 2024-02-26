import express from  'express';

import {userLogIn,userSignUp,getAllUsers} from '../controller/user_controller.js';
import { addScore ,getAllQuizUsers} from '../controller/quiz_controller.js';
import { fetchuser } from '../middleware/fetchUser.js';
const router = express.Router();    

router.post('/signup', userSignUp);
router.post('/login', userLogIn);
router.get('/getAllUsers',fetchuser, getAllUsers);

router.post('/addScore',fetchuser,addScore)
router.get('/getAllQuizUsers',fetchuser,getAllQuizUsers);

export default router;