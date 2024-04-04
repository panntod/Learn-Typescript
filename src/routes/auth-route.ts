import express from "express";
import * as authController from "../controller/auth-controller";
const router = express.Router();

router.get("/authorization", authController.Authorization);
router.post("/authentication", authController.Authentication);

export default router;