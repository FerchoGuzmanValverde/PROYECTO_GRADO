//Imports
import { Pool } from "../database/db.config.js";

/**
 * CREATE Service
 */
export async function create(
    nombreEstudio,
    descripcion,
    resultado,
    idHistoria,
    rutaMamografia
    ) {
    try {
        //Create mirai and save to database
        const [rows] = await Pool.query(
            "CALL uspInsertarEstudioMirai(?, ?, ?, ?, ?);",
            [
                nombreEstudio,
                descripcion,
                resultado,
                idHistoria,
                rutaMamografia
            ]
        );

        console.log({ rows });
        return { mirai : {
            nombreEstudio,
            descripcion,
            resultado,
            idHistoria,
            rutaMamografia }}
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * UPDATE Service
 */
export async function update(
    idEstudio,
    nombreEstudio, 
    descripcion, 
    resultado, 
    idHistoria,
    rutaMamografia
    ) {
    try {
        //Update mirai to database
        const [rows] = await Pool.query(
            "CALL uspModificarEstudioMirai(?, ?, ?, ?, ?, ?);",
            [
                idEstudio,
                nombreEstudio, 
                descripcion, 
                resultado, 
                idHistoria,
                rutaMamografia
            ]
        );

        console.log({ rows });
        return { mirai : { 
            idEstudio,
            nombreEstudio, 
            descripcion, 
            resultado, 
            idHistoria,
            rutaMamografia }}
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * READ ALL Service
 */
export async function readAll() {
    try {
        const [rows] = await Pool.query(
            "CALL uspMostrarEstudioMiraiActivos();"
        );
        return rows
    } catch (error) {
        return error
    }
}

/**
 * FIND BY ID
 */
export async function findById(id) {
    try {
        const [rows] = await Pool.query(
            "CALL uspBuscarEstudioMirai(?);",
            [id]
        );
        return rows;
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * LOGICAL DELETE Service
 */
export async function logDelete(idEstudio) {
    try {
        //Logical Delete study to database
        const [rows] = await Pool.query(
            "CALL uspEliminarEstudioMirai(?);",
            [idEstudio]
        );

        console.log({ rows });
        return { estudio: { idEstudio:  idEstudio }}
    } catch (error) {
        throw new Error(error);
    }
}