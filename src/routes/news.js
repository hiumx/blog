import express from "express";
import newsController from "../app/controllers/NewsController.js";

const router = express.Router();

router.get('/:detail', newsController.detail);
router.get('/', newsController.index);

export default router;