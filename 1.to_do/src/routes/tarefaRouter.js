import { Router } from "express";

import {create, /*/getAll/*/ getAll, getTarefa} from '../controllers/tarefaController.js'

const router = Router()

// router.get("/", getAll),
router.post("/", create)
router.get("/",getAll)
router.get("/:id",getTarefa )

export default router; 