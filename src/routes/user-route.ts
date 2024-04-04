import express from 'express';
const router = express.Router();

import * as userController from '../controller/user-controller';
import { Authorization } from "../controller/auth-controller" 

router.get('/getAll', Authorization, userController.getAllUser);
router.post('/', userController.registration);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
