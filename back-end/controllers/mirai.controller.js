//Import Dependencies
import * as miraiService from "../services/mirai.service.js";
import * as miraiValidator from "../validator/validators.js";

/**
 * CREATE
 * @param { Study, Mirai } req
 * @param { response } res
 */
export const Create = async (req, res) => {
    const { 
        nombreEstudio,
        descripcion,
        resultado,
        idHistoria,
        rutaMamografia
     } = req.body;
    const { errors, isValid } = miraiValidator.miraiValidator(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {
        
        //Create mirai in the database
        const { mirai } = await miraiService.create(
            nombreEstudio,
            descripcion,
            resultado,
            idHistoria,
            rutaMamografia
        );

        //Return the created nuclei cells
        res.json({ mirai });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * UPDATE
 * @param { Study, Mirai } req
 * @param { response } res
 */
export const Update = async (req, res) => {
    const { 
        idEstudio,
        nombreEstudio,
        descripcion,
        resultado,
        idHistoria,
        rutaMamografia
     } = req.body;
    const { errors, isValid } = miraiValidator.miraiValidator(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {

        //Update mirai in the database
        const { mirai } = await miraiService.update(
            idEstudio,
            nombreEstudio,
            descripcion,
            resultado,
            idHistoria,
            rutaMamografia
        );

        //Return the updated mirai
        res.json({ mirai });
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
        const { estudio } = await miraiService.logDelete(id);
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
        //Read mirai from database
        const rows = await miraiService.readAll();
        return res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * Find by ID
 * @param { Mirai } req
 * @param { response } res
 */
export const FindById = async (req, res) => {
    const { id } = req.body;

    try {
        //Read mirai by id from database
        const rows = await miraiService.findById(id);
        return res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};