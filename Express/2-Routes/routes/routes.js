import { Router } from "express";
import * as reports from "../controllers/kunden-controller.js";
const router = Router();
router.post("/", reports.create);
router.delete("/:id",reports.deleteDaten)
router.get("/:id",reports.getDaten)
export default router