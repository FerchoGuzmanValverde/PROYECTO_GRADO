//Imports
import bcrypt from "bcrypt";
import { Pool } from "../database/db.config.js";

/**
 * CREATE Service
 */
export async function create(nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, usuario, contrasenia, rol, correo) {
    try {

        //Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(contrasenia, saltRounds);

        //Create user and save to database
        const [rows] = await Pool.query(
            "CALL uspInsertarPersonaUsuario(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
            [nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, usuario, contrasenia, rol, correo]
        );

        console.log({ rows });
        return { message: "Usuario registrado con éxito."};
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * READ ALL Service
 */
export async function readAll() {
    try {
        const [rows] = await Pool.query("CALL uspMostrarPersonaUsuarioActivos();");
        return rows
    } catch (err) {
        return err
    }
}

/**
 * UPDATE Service
 */
export async function update(idPersona, nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, usuario, contrasenia, rol, correo) {
    try {
        //Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(contrasenia, saltRounds);

        //Update user to database
        const [rows] = await Pool.query(
            "CALL uspModificarPersonaUsuario(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
            [idPersona, nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, usuario, contrasenia, rol, correo]
        );

        console.log({ rows });
        return { usuario: { idPersona, usuario, password: hashedPassword, rol, correo }};
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * LOGICAL DELETE Service
 */
export async function logDelete(id) {
    try {
        //Logical Delete user to database
        const [rows] = await Pool.query(
            "CALL uspEliminarPersonaUsuario(?);",
            [id]
        );

        console.log({ rows });
        return { usuario: { idUsuario:  id }}
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * LOGIN Service
 */
export async function login(correo, contrasenia) {
    console.log({ correo, contrasenia });
    try {
        const [rows] = await Pool.query("CALL uspAutenticacion(?);", [correo]); 
        if (rows.length === 0) {
            throw new Error("Email incorrecto!!");
        }
        const user = rows[0]; 
        if (!bcrypt.compareSync(contrasenia, user.contrasenia)) {
            throw new Error("Contraseña incorrecta!!");
        }
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * FIND BY ID Service
 */
export async function findById(id) {
    try {
        const [rows] = await Pool.query("CALL uspBuscarPersonaUsuario(?);", [id]);
        return rows;
    } catch (error) {
        throw new Error(error);
    }
}