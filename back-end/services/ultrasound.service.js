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
    rutaUltrasonido
    ) {
    try {
        //Create ultrasound and save to database
        const [rows] = await Pool.query(
            "CALL uspInsertarEstudioUltrasonido(?, ?, ?, ?, ?);",
            [
                nombreEstudio,
                descripcion,
                resultado,
                idHistoria,
                rutaUltrasonido
            ]
        );

        console.log({ rows });
        return { ultrasonido : {
            nombreEstudio,
            descripcion,
            resultado,
            idHistoria,
            rutaUltrasonido }}
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * UPDATE Service
 */
export async function update(
    idUltrasonido,
    nombreEstudio,
    descripcion,
    resultado,
    idHistoria,
    rutaUltrasonido
    ) {
    try {
        //Update ultrasound to database
        const [rows] = await Pool.query(
            "CALL uspModificarEstudioUltrasonido(?, ?, ?, ?, ?, ?);",
            [
                idUltrasonido,
                nombreEstudio,
                descripcion,
                resultado,
                idHistoria,
                rutaUltrasonido
            ]
        );

        console.log({ rows });
        return { ultrasonido : { 
            idUltrasonido,
            rutaUltrasonido }}
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
            "CALL uspMostrarEstudioUltrasonidoActivos();"
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
            "CALL uspBuscarEstudioUltrasonido(?);",
            [id]
        );
        return rows
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
            "CALL uspEliminarEstudioUltrasonido(?);",
            [idEstudio]
        );

        console.log({ rows });
        return { estudio: { idEstudio:  idEstudio }}
    } catch (error) {
        throw new Error(error);
    }
}