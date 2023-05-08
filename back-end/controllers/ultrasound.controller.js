//Import Dependencies
import * as ultrasoundService from "../services/ultrasound.service.js";
import * as ultrasoundValidator from "../validator/validators.js";

import path from "path";
import { cwd } from "process";
import { spawn } from 'child_process';
const scriptPath = path.resolve(cwd(), "scripts/ultrasound.py");

/**
 * CREATE
 * @param { Study, Ultrasound } req
 * @param { response } res
 */
export const Create = async (req, res) => {
    const { 
        nombreEstudio,
        descripcion,
        resultado,
        rutaUltrasonido,
        idHistoria
     } = req.body;
    const { errors, isValid } = ultrasoundValidator.ultrasoundValidator(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {
        //Create ultrasound in the database
        const { ultrasonido } = await ultrasoundService.create(
            nombreEstudio,
            descripcion,
            resultado,
            idHistoria,
            rutaUltrasonido
        );

        //Return the created ultrasound
        res.json({ ultrasonido });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * UPDATE
 * @param { Ultrasound } req
 * @param { response } res
 */
export const Update = async (req, res) => {
    const { 
        idEstudio,
        nombreEstudio,
        descripcion,
        resultado,
        idHistoria,
        rutaUltrasonido
     } = req.body;
    const { errors, isValid } = ultrasoundValidator.ultrasoundValidator(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {
        //Update ultrasound in the database
        const { ultrasonido } = await ultrasoundService.update(
            idEstudio,
            nombreEstudio,
            descripcion,
            resultado,
            idHistoria,
            rutaUltrasonido
        );

        //Return the updated ultrasound
        res.json({ ultrasonido });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * LOGICAL DELETE
 * @param { Study } req
 * @param { response } res
 */
export const LogDelete = async (req, res) => {
    const { id } = req.body;

    try {
        //Delete study in the database
        const { estudio } = await ultrasoundService.logDelete(id);
        //Return the deleted study
        res.json({ estudio });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * READ ALL
 * @param { } req
 * @param { response } res
 */
export const ReadAll = async (req, res) => {
    try {
        //Read ultrasounds from database
        const rows = await ultrasoundService.readAll();
        return res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * Find by ID
 * @param { Ultrasound } req
 * @param { response } res
 */
export const FindById = async (req, res) => {
    const { id } = req.body;

    try {
        //Read ultrasound by id from database
        const rows = await ultrasoundService.findById(id);
        return res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * Make a Diagnosis
 */
export const Diagnose = async (req, res) => {
    const {
      rutaUltrasonido
    } = req.body;

    const pythonProcess = spawn('py', [
        scriptPath,
        rutaUltrasonido]);

    try {
        let result = '';

        pythonProcess.stdout.on('data', (data) => {
            console.log("ESTO ES DATA: ", data);
          result += data.toString()[0];
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(data.toString());
          });

        pythonProcess.on('close', (code) => {
            console.log(`Proceso de Python finalizado con código ${code}`);
             return res.status(200).json(result.trim().slice(-1));
          });

    } catch (err) {
        pythonProcess.stderr.on('err', (err) => {
            const result = err.toString('utf-8');
            return res.status(400).json({ message: "Some error occurred while making the Ultrasound." || err });
        });
    }
};