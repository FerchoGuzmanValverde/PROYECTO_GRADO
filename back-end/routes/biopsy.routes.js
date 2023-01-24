//Import dependencies
import express from "express";
import { Create, LogDeleteBiopsy, Read, ReadWithID, UpdateBiopsy } from "../controllers/biopsy.controller.js"

//Create routes
const router = express.Router();

/**
 * Subscribe create biopsy API
 */
router.post('/create-biopsy', async (req, res)=> {
    await Create(req, res);
}); 

/**
 * Subscribe read biopsy API
 */
router.get('/biopsy', async (req, res) => {
    await Read(req, res);
});

/**
 * Subscribe read biopsy with id API
 */
router.post('/read-biopsy', async (req, res) => {
    await ReadWithID(req, res);
});

/**
 * Subscribe update biopsy API
 */
router.post('/update-biopsy', async (req, res) => {
    await UpdateBiopsy(req, res);
});

/**
 * Subscribe logical delete biopsy API
 */
router.post('/delete-biopsy', async (req, res) => {
    await LogDeleteBiopsy(req, res);
});

export default router