import { Router } from "express";
import * as taskController from "../controllers/task.controller";

const router = Router();

router.post("/", taskController.createTask);

router.get("/", taskController.getAllTasks);

export default router;