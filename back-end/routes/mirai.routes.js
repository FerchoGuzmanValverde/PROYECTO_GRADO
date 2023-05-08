//Import dependencies
import express from "express";

import {
    Create,
    Update,
    LogDelete,
    ReadAll,
    FindById
} from "../controllers/mirai.controller.js";

//Create router
const router = express.Router();

/**
 * Subs CREATE
 */
router.post("/new-mirai", async (req, res) => {
    await Create(req, res);
});

/**
 * Subs READ ALL
 */
router.get("/read-mirais", async (req, res) => {
    await ReadAll(req, res);
})

/**
 * Subs READ WITH ID
 */
router.post("/read-mirai", async (req, res) => {
    await FindById(req, res);
});

/**
 * Subs UPDATE
 */
router.patch("/update-mirai", async (req, res) => {
    await Update(req, res);
});

/**
 * Subs LOGICAL DELETE
 */
router.delete("/delete-mirai", async (req, res) => {
    await LogDelete(req, res);
});

export default router;