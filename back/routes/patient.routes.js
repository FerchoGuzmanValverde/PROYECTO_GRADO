//Import dependencies
import express from "express";
import { Create, LogDeletePatient, Read, ReadWithID, UpdatePatient } from "../controllers/patient.controller.js"

//Create routes
const router = express.Router();

/**
 * Subscribe create patient API
 */
router.post('/create-patient', async (req, res)=> {
    await Create(req, res);
}); 

/**
 * Subscribe read patients API
 */
router.get('/patients', async (req, res) => {
    await Read(req, res);
});

/**
 * Subscribe read patient with id API
 */
router.post('/read-patient', async (req, res) => {
    await ReadWithID(req, res);
});

/**
 * Subscribe update patient API
 */
router.post('/update-patient', async (req, res) => {
    await UpdatePatient(req, res);
});

/**
 * Subscribe logical delete patient API
 */
router.post('/delete-patient', async (req, res) => {
    await LogDeletePatient(req, res);
});

export default router