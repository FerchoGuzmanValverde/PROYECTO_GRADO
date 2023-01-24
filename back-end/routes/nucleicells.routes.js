//Import dependencies
import express from "express";
import { Create, LogDeleteNucleiCells, Read, ReadWithID, UpdateNucleiCells } from "../controllers/nucleicells.controller.js"

//Create routes
const router = express.Router();

/**
 * Subscribe create nucleiCells API
 */
router.post('/create-nucleiCells', async (req, res)=> {
    await Create(req, res);
}); 

/**
 * Subscribe read nucleiCells API
 */
router.get('/nucleiCells', async (req, res) => {
    await Read(req, res);
});

/**
 * Subscribe read nucleiCells with id API
 */
router.post('/read-nucleiCells', async (req, res) => {
    await ReadWithID(req, res);
});

/**
 * Subscribe update nucleiCells API
 */
router.post('/update-nucleiCells', async (req, res) => {
    await UpdateNucleiCells(req, res);
});

/**
 * Subscribe logical delete nucleiCells API
 */
router.post('/delete-nucleiCells', async (req, res) => {
    await LogDeleteNucleiCells(req, res);
});

export default router