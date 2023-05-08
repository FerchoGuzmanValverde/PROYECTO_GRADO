//Import dependencies
import express from "express";

import {
    Create,
    Update,
    LogDelete,
    ReadAll,
    FindById,
    Diagnose
} from "../controllers/nucleicells.controller.js";

//Create router
const router = express.Router();

/**
 * Subs CREATE
 */
router.post("/new-nucleicells", async (req, res) => {
    await Create(req, res);
});

/**
 * Subs READ ALL
 */
router.get("/read-nucleicells", async (req, res) => {
    await ReadAll(req, res);
})

/**
 * Subs READ WITH ID
 */
router.post("/read-nucleicell", async (req, res) => {
    await FindById(req, res);
});

/**
 * Subs UPDATE
 */
router.patch("/update-nucleicells", async (req, res) => {
    await Update(req, res);
});

/**
 * Subs LOGICAL DELETE
 */
router.delete("/delete-nucleicells", async (req, res) => {
    await LogDelete(req, res);
});

/**
 * Subs MAKE DIAGNOSE
 */
router.post("/diagnose-nucleicells", async (req, res) => {
    await Diagnose(req, res);
});

export default router;