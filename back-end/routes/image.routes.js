//Import dependencies
import express from "express";
import { Create, LogDeleteImage, Read, ReadWithID, UpdateImage } from "../controllers/image.controller.js"

//Create routes
const router = express.Router();

/**
 * Subscribe create image API
 */
router.post('/create-image', async (req, res)=> {
    await Create(req, res);
});

/**
 * Subscribe read image API
 */
router.get('/image', async (req, res) => {
    await Read(req, res);
});

/**
 * Subscribe read image with id API
 */
router.post('/read-image', async (req, res) => {
    await ReadWithID(req, res);
});

/**
 * Subscribe update image API
 */
router.post('/update-image', async (req, res) => {
    await UpdateImage(req, res);
});

/**
 * Subscribe logical delete image API
 */
router.post('/delete-image', async (req, res) => {
    await LogDeleteImage(req, res);
});

export default router