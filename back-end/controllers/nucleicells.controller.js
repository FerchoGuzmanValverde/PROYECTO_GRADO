//Import Dependencies
import * as nucleiCellsService from "../services/nucleicells.service.js";
import * as nucleiCellsValidator from "../validator/validators.js";

import path from "path";
import { cwd } from "process";
import { spawn } from 'child_process';
const scriptPath = path.resolve(cwd(), "scripts/nucleicells.py");

/**
 * CREATE
 * @param { Study, NucleiCells } req
 * @param { response } res
 */
export const Create = async (req, res) => {
    const { 
        nombreEstudio,
        descripcion,
        resultado,
        idHistoria,
        clumbThickness,
        shapeUniformity,
        marginalAdhesion,
        epithelialSize,
        bareNucleoli,
        blandChromatin,
        normalNucleoli,
        mitosis
     } = req.body;
    const { errors, isValid } = nucleiCellsValidator.nucleiCellsValidator(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {
        //Create nuclei cells in the database
        const { nucleoscelulares } = await nucleiCellsService.create(
            nombreEstudio,
            descripcion,
            resultado,
            idHistoria,
            clumbThickness,
            shapeUniformity,
            marginalAdhesion,
            epithelialSize,
            bareNucleoli,
            blandChromatin,
            normalNucleoli,
            mitosis
        );

        //Return the created nuclei cells
        res.json({ nucleoscelulares });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * UPDATE
 * @param { Study, NucleiCells } req
 * @param { response } res
 */
export const Update = async (req, res) => {
    const { 
        idEstudio,
        nombreEstudio,
        descripcion,
        resultado,
        idHistoria,
        clumbThickness,
        shapeUniformity,
        marginalAdhesion,
        epithelialSize,
        bareNucleoli,
        blandChromatin,
        normalNucleoli,
        mitosis
     } = req.body;
    const { errors, isValid } = nucleiCellsValidator.nucleiCellsValidator(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {
        
        //Update nuclei cells in the database
        const { nucleoscelulares } = await nucleiCellsService.update(
            idEstudio,
            nombreEstudio,
            descripcion,
            resultado,
            idHistoria,
            clumbThickness,
            shapeUniformity,
            marginalAdhesion,
            epithelialSize,
            bareNucleoli,
            blandChromatin,
            normalNucleoli,
            mitosis
        );

        //Return the updated nuclei cells
        res.json({ nucleoscelulares });
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
        const { estudio } = await nucleiCellsService.logDelete(id);
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
        //Read nuclei cells from database
        const rows = await nucleiCellsService.readAll();
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
        //Read nuclei cells by id from database
        const rows = await nucleiCellsService.findById(id);
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
      clumbThickness,
      shapeUniformity,
      marginalAdhesion,
      epithelialSize,
      bareNucleoli,
      blandChromatin,
      normalNucleoli,
      mitosis
    } = req.body;

    const pythonProcess = spawn('py', [
        scriptPath,
        clumbThickness,
        shapeUniformity,
        marginalAdhesion,
        epithelialSize,
        bareNucleoli,
        blandChromatin,
        normalNucleoli,
        mitosis
        ]);

    try {
        pythonProcess.stdout.on('data', (data) => {
            const result = data.toString('utf-8')[0];
            return res.status(200).json(result);
        });

    } catch (err) {
        pythonProcess.stderr.on('err', (err) => {
            const result = err.toString('utf-8');
            return res.status(400).json({ message: "Some error occurred while creating the Nuclei Cells." || err });
        });
    }
};