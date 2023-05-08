//Import dependencies
import express from "express";

import {
    Create,
    Update,
    LogDelete,
    ReadAll,
    FindById,
    Diagnose
} from "../controllers/ultrasound.controller.js";

//Create router
const router = express.Router();

/**
 * Subs CREATE
 */
router.post("/new-ultrasound", async (req, res) => {
    await Create(req, res);
});

/**
 * Subs READ ALL
 */
router.get("/read-ultrasounds", async (req, res) => {
    await ReadAll(req, res);
})

/**
 * Subs READ WITH ID
 */
router.post("/read-ultrasound", async (req, res) => {
    await FindById(req, res);
});

/**
 * Subs UPDATE
 */
router.patch("/update-ultrasound", async (req, res) => {
    await Update(req, res);
});

/**
 * Subs LOGICAL DELETE
 */
router.delete("/delete-ultrasound", async (req, res) => {
    await LogDelete(req, res);
});

/**
 * Subs MAKE DIAGNOSE
 */
router.post("/diagnose-ultrasound", async (req, res) => {
    await Diagnose(req, res);
});

export default router;