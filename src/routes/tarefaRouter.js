import { Router } from "express";

import {create, /*/getAll/*/ getAll, getTarefa, updateTarefa,updateStatusTarefa,buscarTarefaPorSistuacao} from '../controllers/tarefaController.js'

const router = Router()

// router.get("/", getAll),
router.post("/", create)
router.get("/",getAll)
router.get("/:id",getTarefa )
router.put("/:id", updateTarefa)
router.patch("/:id/status", updateStatusTarefa)
router.get("/status/:situacao",buscarTarefaPorSistuacao )

export default router; 