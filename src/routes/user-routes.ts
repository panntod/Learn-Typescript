import express from 'express';
const router = express.Router();

import * as userController from '../controller/user-controller';

router.get('/getAll', userController.getAllUser);
router.post('/', userController.registration);
router.put('/:id', userController.updateUser);

export default router;
