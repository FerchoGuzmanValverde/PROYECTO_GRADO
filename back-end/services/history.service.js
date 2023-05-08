//Imports
import { Pool } from "../database/db.config.js";

/**
 * CREATE Service
 */
/*export async function create(descripcion, idPaciente) {
    try {
        //Create history and save to database
        const [rows] = await Pool.query(
            "INSERT INTO historia (descripcion, idPaciente) VALUES (?, ?)",
            [descripcion, idPaciente]
        );

        console.log({ rows });
        return { historia: { idHistoria: rows.insertId, descripcion, idPaciente}};
    } catch (error) {
        throw new Error(error);
    }
}     */

/**
 * READ ALL Service
 */
export async function readAll() {
    try {
        const [rows] = await Pool.query("CALL uspMostrarHistoriasActivas();");
        return rows
    } catch (err) {
        return err
    }
}

/**
 * UPDATE Service
 */
/*export async function update(idHistoria, descripcion, idPaciente) {
    try {
        //Update history to database
        const [rows] = await Pool.query(
            "UPDATE historia SET descripcion = ?, idPaciente = ? WHERE idHistoria = ?",
            [descripcion, idPaciente, idHistoria]
        );

        console.log({ rows });
        return { historia: { idHistoria, descripcion, idPaciente }};
    } catch (error) {
        throw new Error(error);
    }
}       */

/**
 * LOGICAL DELETE Service
 */
/*export async function logDelete(id) {
    try {
        //Logical Delete history to database
        const [rows] = await Pool.query(
            "UPDATE historia SET estado = 0 WHERE idHistoria = ?",
            [id]
        );

        console.log({ rows });
        return { historia: { idHistoria:  id }}
    } catch (error) {
        throw new Error(error);
    }
}       */

/**
 * FIND BY ID Service
 */
export async function findById(id) {
    try {
        const [rows] = await Pool.query(
            "CALL uspBuscarHistoriaId(?);", 
            [id]
        );
        return rows;
    } catch (error) {
        throw new Error(error);
    }
}