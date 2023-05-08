//Import dependencies
import express from "express";

import {
    LogDelete,
    ReadAll,
    FindById,
    Update,
    AuthUser,
    Me,
    Create,
    Logout
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/authentication.js";

//Create router
const router = express.Router();

/**
 * Subs CREATE
 */
router.post("/new-user", async (req, res) => {
    await Create(req, res);
});

/**
 * Subs READ ALL
 */
router.get("/read-users", async (req, res) => {
    await ReadAll(req, res);
})

/**
 * Subs READ WITH ID
 */
router.post("/read-user", async (req, res) => {
    await FindById(req, res);
});

/**
 * Subs UPDATE
 */
router.patch("/update-user", async (req, res) => {
    await Update(req, res);
});

/**
 * Subs LOGICAL DELETE
 */
router.delete("/delete-user", async (req, res) => {
    await LogDelete(req, res);
});

/**
 * Subs AUTHENTICATION
 */
router.post("/login", async (req, res) => {
    await AuthUser(req, res);
});

router.get("/me", isAuthenticated, async (req, res) => {
    await Me(req, res);
});

/**
 * Subs LOG OUT
 */
router.post("/logout", async (req, res) => {
    await Logout(req, res);
});

export default router;