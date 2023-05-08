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
    clumbThickness,
    shapeUniformity,
    marginalAdhesion,
    epithelialSize,
    bareNucleoli,
    blandChromatin,
    normalNucleoli,
    mitosis
    ) {
    try {
        //Create nuclei cells and save to database
        const [rows] = await Pool.query(
            "CALL uspInsertarEstudioNucleosC(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
            [
                nombreEstudio, 
                descripcion, 
                resultado, 
                idHistoria,
                clumbThickness,
                shapeUniformity,
                marginalAdhesion,
                epithelialSize,
                bareNucleoli,
                blandChromatin,
                normalNucleoli,
                mitosis
            ]
        );

        console.log({ rows });
        return { nucleoscelulares : { 
            nombreEstudio,
            descripcion,
            resultado,
            idHistoria,
            clumbThickness,
            shapeUniformity,
            marginalAdhesion,
            epithelialSize,
            bareNucleoli,
            blandChromatin,
            normalNucleoli,
            mitosis }}
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
    clumbThickness,
    shapeUniformity,
    marginalAdhesion,
    epithelialSize,
    bareNucleoli,
    blandChromatin,
    normalNucleoli,
    mitosis
    ) {
    try {
        //Update nuclei cells to database
        const [rows] = await Pool.query(
            "CALL uspModificarEstudioNucleosC(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
            [
                idEstudio,
                nombreEstudio, 
                descripcion, 
                resultado, 
                idHistoria,
                clumbThickness,
                shapeUniformity,
                marginalAdhesion,
                epithelialSize,
                bareNucleoli,
                blandChromatin,
                normalNucleoli,
                mitosis
            ]
        );

        console.log({ rows });
        return { nucleoscelulares : { 
            idEstudio,
            clumbThickness,
            shapeUniformity,
            marginalAdhesion,
            epithelialSize,
            bareNucleoli,
            blandChromatin,
            normalNucleoli,
            mitosis }}
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
            "CALL uspMostrarEstudioNucleosCActivos();"
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
            "CALL uspBuscarEstudioNucleosC(?);",
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
            "CALL uspEliminarEstudioNucleosC(?);",
            [idEstudio]
        );

        console.log({ rows });
        return { estudio: { idEstudio:  idEstudio }}
    } catch (error) {
        throw new Error(error);
    }
}