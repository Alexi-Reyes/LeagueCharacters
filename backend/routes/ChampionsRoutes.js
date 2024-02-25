import express from "express";
import { createChampion, getChampions, getChampion, updateChampion, deleteChampion } from "../controllers/ChampionsController.js";

const router = express.Router();

router.get("/", getChampions);
router.get("/:id", getChampion);
router.post("/", createChampion);
router.put("/:id", updateChampion);
router.delete("/:id", deleteChampion);

export default router;
