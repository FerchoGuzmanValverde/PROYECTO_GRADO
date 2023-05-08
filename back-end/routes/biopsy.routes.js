//Import dependencies
import express from "express";

import {
    Create,
    Update,
    LogDelete,
    ReadAll,
    FindById,
    Diagnose
} from "../controllers/biopsy.controller.js";

//Create router
const router = express.Router();

/**
 * Subs CREATE
 */
router.post("/new-biopsy", async (req, res) => {
    await Create(req, res);
});

/**
 * Subs READ ALL
 */
router.get("/read-biopsies", async (req, res) => {
    await ReadAll(req, res);
})

/**
 * Subs READ WITH ID
 */
router.post("/read-biopsy", async (req, res) => {
    await FindById(req, res);
});

/**
 * Subs UPDATE
 */
router.patch("/update-biopsy", async (req, res) => {
    await Update(req, res);
});

/**
 * Subs LOGICAL DELETE
 */
router.delete("/delete-biopsy", async (req, res) => {
    await LogDelete(req, res);
});

/**
 * Subs MAKE DIAGNOSE
 */
router.post("/diagnose-biopsy", async (req, res) => {
    await Diagnose(req, res);
});

export default router;