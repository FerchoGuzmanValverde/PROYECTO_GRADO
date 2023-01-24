//Import dependencies
import { Pool } from '../database/db.config.js'

/**
 * Create a new Patient
 * @param { Patient } req 
 * @param { response } res 
 */
export const Create = async (req, res) => {
    const { patientCode, patientName, patientFLN, patientSLN, idUser } = req.body;

    try {

        //Verify don't repeat patients
        const [exist] = await Pool.query("SELECT * FROM patient WHERE patientName = ? AND patientFLN = ?", [patientName, patientFLN]);
        if (exist.length>0)
            return res.status(401).json({ message: 'El paciente ya esta registrado!!' });
        
        //Insert new patient
        const [rows] = await Pool.query("INSERT INTO patient (patientCode, patientName, patientFLN, patientSLN, idUser) VALUES (?, ?, ?, ?, ?)",
        [patientCode, patientName, patientFLN, patientSLN, idUser]);
        return res.status(200).json(rows);

    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while creating the Patient." || err });
    }
    
}

/**
 * Read Patients
 * @param { } req 
 * @param { response } res 
 */
export const Read = async (req, res) => {

    try {
        const [rows] = await Pool.query("SELECT * FROM patient");
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while reading Patients." || err });
    }
    
}

/**
 * Read Patient with ID
 * @param { idPatient } req 
 * @param { response } res 
 */
export const ReadWithID = async (req, res) => {
    
    try {
        const [rows] = await Pool.query("SELECT * FROM patient WHERE idPatient = ?", [req.body.id]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while reading the Patient." || err });
    }
    
}

/**
 * Update Patient
 * @param { Patient } req 
 * @param { response } res 
 */
export const UpdatePatient = async (req, res) => {

    try {
        const [rows] = await Pool.query("UPDATE patient SET patientCode = ?, patientName = ?, patientFLN = ?, patientSLN = ? WHERE idPatient = ?", 
        [req.body.patientCode, req.body.patientName, req.body.patientFLN, req.body.patientSLN, req.body.idPatient]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while updating the Patient." || err });
    }
    
}

/**
 * Logical Delete Patient
 * @param { Patient } req 
 * @param { response } res 
 */
export const LogDeletePatient = async (req, res) => {

    try {
        const [rows] = await Pool.query("UPDATE patient SET status = 0 WHERE idPatient = ?", 
        [req.body.id]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while deleting the Patient." || err });
    }
    
}

export default Create