//Import Dependencies
import * as biopsyService from "../services/biopsy.service.js";
import * as biopsyValidator from "../validator/validators.js";

import path from "path";
import { cwd } from "process";
import { spawn } from 'child_process';
const scriptPath = path.resolve(cwd(), "scripts/biopsy.py");

/**
 * CREATE
 * @param { Study, Biopsy } req
 * @param { response } res
 */
export const Create = async (req, res) => {
    const { 
        nombreEstudio,
        descripcion,
        resultado,
        idHistoria,
        radiusMean,
        textureMean,
        smoothnessMean,
        compactnessMean,
        symmetryMean,
        fractalDimensionMean,
        radiusSE,
        textureSE,
        smoothnessSE,
        concavePointsSE,
        symmetrySE,
        symmetryWorst,
        fractalDimensionWorst
     } = req.body;
    const { errors, isValid } = biopsyValidator.biopsyValidator(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {

        //Create biopsy in the database
        const { biopsia } = await biopsyService.create(
            nombreEstudio, 
            descripcion, 
            resultado, 
            idHistoria,
            radiusMean,
            textureMean,
            smoothnessMean,
            compactnessMean,
            symmetryMean,
            fractalDimensionMean,
            radiusSE,
            textureSE,
            smoothnessSE,
            concavePointsSE,
            symmetrySE,
            symmetryWorst,
            fractalDimensionWorst
        );

        //Return the created biopsy
        res.json({ biopsia });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * UPDATE
 * @param { Study, Biopsy } req
 * @param { response } res
 */
export const Update = async (req, res) => {
    const { 
        idEstudio,
        nombreEstudio,
        descripcion,
        resultado,
        idHistoria,
        radiusMean,
        textureMean,
        smoothnessMean,
        compactnessMean,
        symmetryMean,
        fractalDimensionMean,
        radiusSE,
        textureSE,
        smoothnessSE,
        concavePointsSE,
        symmetrySE,
        symmetryWorst,
        fractalDimensionWorst
     } = req.body;
    const { errors, isValid } = biopsyValidator.biopsyValidator(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {

        //Update biopsy in the database
        const { biopsia } = await biopsyService.update(
            idEstudio,
            nombreEstudio,
            descripcion,
            resultado,
            idHistoria,
            radiusMean,
            textureMean,
            smoothnessMean,
            compactnessMean,
            symmetryMean,
            fractalDimensionMean,
            radiusSE,
            textureSE,
            smoothnessSE,
            concavePointsSE,
            symmetrySE,
            symmetryWorst,
            fractalDimensionWorst
        );

        //Return the updated biopsy
        res.json({ biopsia });
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
        const { estudio } = await biopsyService.logDelete(id);
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
        //Read biopsies from database
        const rows = await biopsyService.readAll();
        return res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * Find by ID
 * @param { Biopsy } req
 * @param { response } res
 */
export const FindById = async (req, res) => {
    const { id } = req.body;

    try {
        //Read biopsy by id from database
        const rows = await biopsyService.findById(id);
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
      radiusMean,
      textureMean,
      smoothnessMean,
      compactnessMean,
      symmetryMean,
      fractalDimensionMean,
      radiusSE,
      textureSE,
      smoothnessSE,
      compactnessSE,
      concavePointsSE,
      symmetrySE,
      symmetryWorst,
      fractalDimensionWorst,
    } = req.body;

    const pythonProcess = spawn('py', [
        scriptPath,
        radiusMean,
        textureMean,
        smoothnessMean,
        compactnessMean,
        symmetryMean,
        fractalDimensionMean,
        radiusSE,
        textureSE,
        smoothnessSE,
        compactnessSE,
        concavePointsSE,
        symmetrySE,
        symmetryWorst,
        fractalDimensionWorst]);

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
             return res.status(200).json(result);
          });

    } catch (err) {
        pythonProcess.stderr.on('err', (err) => {
            const result = err.toString('utf-8');
            return res.status(400).json({ message: "Some error occurred while creating the Biopsy." || err });
        });
    }
};