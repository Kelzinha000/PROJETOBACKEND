import { Router } from "express";

import {create, getAll} from '../controllers/tarefaController.js'

const router = Router()

router.get("/", getAll),
router.get("/", create)

export default router; 