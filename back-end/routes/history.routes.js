//Import dependencies
import express from "express";
import { Create, LogDeleteHistory, Read, ReadWithID, UpdateHistory } from "../controllers/history.controller.js"

//Create routes
const router = express.Router();

/**
 * Subscribe create history API
 */
router.post('/create-history', async (req, res)=> {
    await Create(req, res);
}); 

/**
 * Subscribe read histories API
 */
router.get('/histories', async (req, res) => {
    await Read(req, res);
});

/**
 * Subscribe read history with id API
 */
router.post('/read-history', async (req, res) => {
    await ReadWithID(req, res);
});

/**
 * Subscribe update history API
 */
router.post('/update-history', async (req, res) => {
    await UpdateHistory(req, res);
});

/**
 * Subscribe logical delete history API
 */
router.post('/delete-history', async (req, res) => {
    await LogDeleteHistory(req, res);
});

export default router