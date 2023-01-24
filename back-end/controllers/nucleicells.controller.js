//Import dependencies
import { Pool } from '../database/db.config.js'

/**
 * Create a new NucleiCells
 * @param { NucleiCells } req 
 * @param { response } res 
 */
export const Create = async (req, res) => {
    const { clumbThickness, shapeUniformity, marginalAdhesion, epithelialSize, bareNucleoli, blandChromatin, normalNucleoli, mitosis, diagnosis, idHistory } = req.body;

    try {

        //Validations
        
        //Insert new NucleiCells
        const [rows] = await Pool.query("INSERT INTO nucleicells (clumbThickness, shapeUniformity, marginalAdhesion, epithelialSize, bareNucleoli, blandChromatin, normalNucleoli, mitosis, diagnosis, idHistory) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [clumbThickness, shapeUniformity, marginalAdhesion, epithelialSize, bareNucleoli, blandChromatin, normalNucleoli, mitosis, diagnosis, idHistory]);
        return res.status(200).json(rows);

    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while creating the NucleiCells." || err });
    }
    
}

/**
 * Read NucleiCells
 * @param { NucleiCells } req 
 * @param { response } res 
 */
export const Read = async (req, res) => {

    try {
        const [rows] = await Pool.query("SELECT * FROM nucleicells");
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while reading NucleiCells." || err });
    }
    
}

/**
 * Read NucleiCells with ID
 * @param { idNucleiCells } req 
 * @param { response } res 
 */
export const ReadWithID = async (req, res) => {
    
    try {
        const [rows] = await Pool.query("SELECT * FROM nucleicells WHERE idNucleiCells = ?", [req.body.idNucleiCells]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while reading the NucleiCells." || err });
    }
    
}

/**
 * Update NucleiCells
 * @param { NucleiCells } req 
 * @param { response } res 
 */
export const UpdateNucleiCells = async (req, res) => {

    try {
        const [rows] = await Pool.query("UPDATE nucleicells SET clumbThickness = ?, shapeUniformity = ?, marginalAdhesion = ?, epithelialSize = ?, bareNucleoli = ?, blandChromatin = ?, normalNucleoli = ?, mitosis = ?, diagnosis = ? WHERE idNucleiCells = ?", 
        [ req.body.clumbThickness, req.body.shapeUniformity, req.body.marginalAdhesion, req.body.epithelialSize, req.body.bareNucleoli, req.body.blandChromatin, req.body.normalNucleoli, req.body.mitosis, req.body.diagnosis, req.body.idNucleiCells ]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while updating the NucleiCells." || err });
    }
    
}

/**
 * Logical Delete NucleiCells
 * @param { NucleiCells } req 
 * @param { response } res 
 */
export const LogDeleteNucleiCells = async (req, res) => {

    try {
        const [rows] = await Pool.query("UPDATE nucleicells SET status = 0 WHERE idNucleiCells = ?", 
        [req.body.idNucleiCells]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while deleting the NucleiCells." || err });
    }
    
}

export default Create