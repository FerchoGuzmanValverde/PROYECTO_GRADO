//Import dependencies
import { Pool } from '../database/db.config.js'

/**
 * Create a new Image
 * @param { Image } req 
 * @param { response } res 
 */
export const Create = async (req, res) => {
    const { image, studyType, diagnostic, idHistory } = req.body;

    try {

        //Validations
        
        //Insert new Image
        const [rows] = await Pool.query("INSERT INTO image (image, studyType, diagnostic, idHistory) VALUES (?, ?, ?, ?)",
        [image, studyType, diagnostic, idHistory]);
        return res.status(200).json(rows);

    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while creating the Image." || err });
    }
    
}

/**
 * Read Image
 * @param { Image } req 
 * @param { response } res 
 */
export const Read = async (req, res) => {

    try {
        const [rows] = await Pool.query("SELECT * FROM image");
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while reading Image." || err });
    }
    
}

/**
 * Read Image with ID
 * @param { idImage } req 
 * @param { response } res 
 */
export const ReadWithID = async (req, res) => {
    
    try {
        const [rows] = await Pool.query("SELECT * FROM image WHERE idImage = ?", [req.body.idImage]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while reading the Image." || err });
    }
    
}

/**
 * Update Image
 * @param { Image } req 
 * @param { response } res 
 */
export const UpdateImage = async (req, res) => {

    try {
        const [rows] = await Pool.query("UPDATE image SET image = ?, studyType = ?, diagnostic = ? WHERE idImage = ?", 
        [ req.body.image, req.body.studyType, req.body.diagnostic, req.body.idImage]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while updating the Image." || err });
    }
    
}

/**
 * Logical Delete Image
 * @param { Image } req 
 * @param { response } res 
 */
export const LogDeleteImage = async (req, res) => {

    try {
        const [rows] = await Pool.query("UPDATE image SET status = 0 WHERE idImage = ?", 
        [req.body.idImage]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while deleting the Image." || err });
    }
    
}

export default Create