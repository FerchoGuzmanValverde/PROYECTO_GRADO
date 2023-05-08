//Import dependencies
import express from "express";

import {
    LogDelete,
    ReadAll,
    FindById,
    Update,
    Create
} from "../controllers/history.controller.js";

//Create router
const router = express.Router();

/**
 * Subs CREATE
 */
router.post("/new-history", async (req, res) => {
    await Create(req, res);
});

/**
 * Subs READ ALL
 */
router.get("/read-histories", async (req, res) => {
    await ReadAll(req, res);
});

/**
 * Subs READ WITH ID
 */
router.post("/read-history", async (req, res) => {
    await FindById(req, res);
});

/**
 * Subs UPDATE
 */
router.patch("/update-history", async (req, res) => {
    await Update(req, res);
});

/**
 * Subs LOGICAL DELETE
 */
router.delete("/delete-history", async (req, res) => {
    await LogDelete(req, res);
});

export default router;