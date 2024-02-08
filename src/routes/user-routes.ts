import express from 'express';
const router = express.Router();

import * as userController from '../controller/user-controller';

router.get('/getAll', userController.getAllUser);
router.post('/', userController.registration);

export default router;
