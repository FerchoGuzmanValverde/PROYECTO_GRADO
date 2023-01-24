//Import dependencies
import { Pool } from '../database/db.config.js'

/**
 * Create a new History
 * @param { History } req 
 * @param { response } res 
 */
export const Create = async (req, res) => {
    const { historyCode, description, idPatient } = req.body;

    try {

        //Validations
        
        //Insert new history
        const [rows] = await Pool.query("INSERT INTO history (historyCode, description, idPatient) VALUES (?, ?, ?)",
        [historyCode, description, idPatient]);
        return res.status(200).json(rows);

    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while creating the History." || err });
    }
    
}

/**
 * Read History
 * @param { } req 
 * @param { response } res 
 */
export const Read = async (req, res) => {

    try {
        const [rows] = await Pool.query("SELECT * FROM history");
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while reading Histories." || err });
    }
    
}

/**
 * Read History with ID
 * @param { idHistory } req 
 * @param { response } res 
 */
export const ReadWithID = async (req, res) => {
    
    try {
        const [rows] = await Pool.query("SELECT * FROM history WHERE idHistory = ?", [req.body.id]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while reading the History." || err });
    }
    
}

/**
 * Update History
 * @param { History } req 
 * @param { response } res 
 */
export const UpdateHistory = async (req, res) => {

    try {
        const [rows] = await Pool.query("UPDATE history SET description = ? WHERE idHistory = ?", 
        [req.body.description, req.body.idHistory]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while updating the History." || err });
    }
    
}

/**
 * Logical Delete History
 * @param { History } req 
 * @param { response } res 
 */
export const LogDeleteHistory = async (req, res) => {

    try {
        const [rows] = await Pool.query("UPDATE history SET status = 0 WHERE idHistory = ?", 
        [req.body.id]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while deleting the History." || err });
    }
    
}

export default Create