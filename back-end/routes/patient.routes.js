//Import dependencies
import express from "express";

import {
    LogDelete,
    ReadAll,
    FindById,
    Update,
    Create
} from "../controllers/patient.controller.js";

//Create router
const router = express.Router();

/**
 * Subs CREATE
 */
router.post("/new-patient", async (req, res) => {
    await Create(req, res);
});

/**
 * Subs READ ALL
 */
router.get("/read-patients", async (req, res) => {
    await ReadAll(req, res);
})

/**
 * Subs READ WITH ID
 */
router.post("/read-patient", async (req, res) => {
    await FindById(req, res);
});

/**
 * Subs UPDATE
 */
router.patch("/update-patient", async (req, res) => {
    await Update(req, res);
});

/**
 * Subs LOGICAL DELETE
 */
router.delete("/delete-patient", async (req, res) => {
    await LogDelete(req, res);
});

export default router;