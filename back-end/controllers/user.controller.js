//import User from "../models/user.model.js"
import { Pool } from '../database/db.config.js'
import jwt from "jsonwebtoken";

/**
 * Create a new User
 * @param { User } req 
 * @param { response } res 
 */
export const Create = async (req, res) => {
    const { userName, password, email, macAddress } = req.body;

    try {

        //Verify don't repeat macAddress
        const [exist] = await Pool.query("SELECT * FROM user WHERE macAddress = ?", [macAddress]);
        if (exist.length>0)
            return res.status(401).json({ message: 'La dirección MAC ya esta registrada!!' });
        
        //Insert nee user
        const [rows] = await Pool.query("INSERT INTO user (userName, password, email, macAddress) VALUES (?, ?, ?, ?)",
        [userName, password, email, macAddress]);
        return res.status(201).json({user:{ id:rows.insertId, email }});

    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while creating the User." || err });
    }
    
}

/**
 * Read Users
 * @param { } req 
 * @param { response } res 
 */
export const Read = async (req, res) => {

    try {
        const [rows] = await Pool.query("SELECT * FROM user");
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while reading Users." || err });
    }
    
}

/**
 * Read User with ID
 * @param { idUser } req 
 * @param { response } res 
 */
export const ReadWithID = async (req, res) => {
    
    try {
        const [rows] = await Pool.query("SELECT * FROM user WHERE idUser = ?", [req.body.id]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while reading the User." || err });
    }
    
}

/**
 * Update User
 * @param { User } req 
 * @param { response } res 
 */
export const UpdateUser = async (req, res) => {

    try {
        const [rows] = await Pool.query("UPDATE user SET userName = ?, password = ?, email = ?, macAddress = ? WHERE idUser = ?", 
        [req.body.userName, req.body.password, req.body.email, req.body.macAddress, req.body.id]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while updating the User." || err });
    }
    
}

/**
 * Logical Delete User
 * @param { User } req 
 * @param { response } res 
 */
export const LogDeleteUser = async (req, res) => {

    try {
        const [rows] = await Pool.query("UPDATE user SET status = 0 WHERE idUser = ?", 
        [req.body.id]);
        return res.status(200).json(rows);
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while deleting the User." || err });
    }
    
}

/**
 * AuthUser
 * @param { User } req 
 * @param { response } res 
 */
export const AuthUser = async (req, res) => {
    /*const { userName, password } = req.body;

    try {
        //Verify the user exists
        const [rows] = await Pool.query("SELECT * FROM user WHERE userName = ? AND password = ?", [userName, password]);
      
        if (rows.length==0)
            return res.status(401).json({ message: 'Usuario o contraseña incorrecto!!' });
        
        const token = jwt.sign({ idUser:rows[0].idUser, userName:rows[0].userName }, "GVF0026694", { expiresIn: '6h' });

        console.log("USUARIO EN CONTROLADOR", rows[0])
        res.status(201).json({user:{ idUser:rows[0].idUser, userName }, token: token})
        console.log(res.json())
      
        return res.status(201).json({user:{ id:rows[0].id, userName }, token});
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Some error occurred while authenticating the User." || err });
    }*/
}

/**
 * Logout
 * @param { User } req 
 * @param { response } res 
 */
export const Logout = async (req, res) => {
    //Make logout here
}

export default Create