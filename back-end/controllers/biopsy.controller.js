//Import dependencies
import { Pool } from '../database/db.config.js'

/**
 * Create a new Biopsy
 * @param { Biopsy } req 
 * @param { response } res 
 */
export const Create = async (req, res) => {
    const { radioMean, textureMean, smoothnessMean, compactnessMean, symmetryMean, fractalDimensionMean, radiusSE,textureSE, smoothnessSE, concavePointsSE, symmetrySE, symmetryWorst, fractalDimensionWorst, diagnostic, idHistory } = req.body;

    try {

        //Validations
        
        //Insert new biopsy
        const [rows] = await Pool.query("INSERT INTO biopsy (radioMean, textureMean, smoothnessMean, compactnessMean, symmetryMean, fractalDimensionMean, radiusSE,textureSE, smoothnessSE, concavePointsSE, symmetrySE, symmetryWorst, fractalDimensionWorst, diagnostic, idHistory) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,? ,?,?)",
        [radioMean, textureMean, smoothnessMean, compactnessMean, symmetryMean, fractalDimensionMean, radiusSE,textureSE, smoothnessSE, concavePointsSE, symmetrySE, symmetryWorst, fractalDimensionWorst, diagnostic, idHistory]);
        return res.status(200).json(rows);

    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while creating the Biopsy." || err });
    }
    
}

/**
 * Read Biopsy
 * @param { Biopsy } req 
 * @param { response } res 
 */
export const Read = async (req, res) => {

    try {
        const [rows] = await Pool.query("SELECT * FROM biopsy");
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while reading Biopsy." || err });
    }
    
}

/**
 * Read Biopsy with ID
 * @param { idBiopsy } req 
 * @param { response } res 
 */
export const ReadWithID = async (req, res) => {
    
    try {
        const [rows] = await Pool.query("SELECT * FROM biopsy WHERE idBiopsy = ?", [req.body.idBiopsy]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while reading the Biopsy." || err });
    }
    
}

/**
 * Update Biopsy
 * @param { Biopsy } req 
 * @param { response } res 
 */
export const UpdateBiopsy = async (req, res) => {

    try {
        const [rows] = await Pool.query("UPDATE biopsy SET radioMean = ?, textureMean = ?, smoothnessMean = ?, compactnessMean = ?, symmetryMean = ?, fractalDimensionMean = ?, radiusSE =? ,textureSE = ?, smoothnessSE = ?, concavePointsSE = ?, symmetrySE = ?, symmetryWorst = ?, fractalDimensionWorst = ?, diagnostic = ? WHERE idBiopsy = ?", 
        [ req.body.radioMean, req.body.textureMean, req.body.smoothnessMean, req.body.compactnessMean, req.body.symmetryMean, req.body.fractalDimensionMean, req.body.radiusSE, req.body.textureSE, req.body.smoothnessSE, req.body.concavePointsSE, req.body.symmetrySE, req.body.symmetryWorst, req.body.fractalDimensionWorst, req.body.diagnostic, req.body.idBiopsy]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while updating the Biopsy." || err });
    }
    
}

/**
 * Logical Delete Biopsy
 * @param { Biopsy } req 
 * @param { response } res 
 */
export const LogDeleteBiopsy = async (req, res) => {

    try {
        const [rows] = await Pool.query("UPDATE biopsy SET status = 0 WHERE idBiopsy = ?", 
        [req.body.idBiopsy]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while deleting the Biopsy." || err });
    }
    
}

export default Create