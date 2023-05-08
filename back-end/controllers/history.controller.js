//Import Dependencies
import * as historyService from "../services/history.service.js";
import * as historyValidator from "../validator/validators.js";

/**
 * CREATE
 * @param { History } req
 * @param { response } res
 */
export const Create = async (req, res) => {
    const { descripcion, idPaciente } = req.body;
    const { errors, isValid } = historyValidator.historyValidator(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {
        //Create history in the database
        const { historia } = await historyService.create(descripcion, idPaciente);
        //Return the new history
        res.json({ historia });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * READ ALL
 * @param { } req
 * @param { response } res
 */
export const ReadAll = async (req, res) => {
    try {
        //Read histories from database
        const rows = await historyService.readAll();
        return res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * UPDATE
 * @param { History } req
 * @param { response } res
 */
export const Update = async (req, res) => {
    const { idHistoria, descripcion, idPaciente } = req.body;
    const { errors, isValid } = historyValidator.historyValidator(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {
        //Update history in the database
        const { historia } = await historyService.update(idHistoria, descripcion, idPaciente);
        //Return the updated history
        res.json({ historia });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * LOGICAL DELETE
 * @param { History } req
 * @param { response } res
 */
export const LogDelete = async (req, res) => {
    const { id } = req.body;

    try {
        //Delete history in the database
        const { historia } = await historyService.logDelete(id);
        //Return the deleted history
        res.json({ historia });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * Find by ID
 * @param { History } req
 * @param { response } res
 */
export const FindById = async (req, res) => {
    const { id } = req.body;

    try {
        //Read history by id from database
        const rows = await historyService.findById(id);
        return res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};