// user-routes.ts
import express from 'express';
const router = express.Router();

import * as userController from '../controller/user-controller';

router.get('/getAll', userController.getAllUser);

export default router;
