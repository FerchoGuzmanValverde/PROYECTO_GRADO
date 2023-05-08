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
    radiusMean,
    textureMean,
    smoothnessMean,
    compactnessMean,
    symmetryMean,
    fractalDimensionMean,
    radiusSE,
    textureSE,
    smoothnessSE,
    concavePointsSE,
    symmetrySE,
    symmetryWorst,
    fractalDimensionWorst
    ) {
    try {
        //Create biopsy and save to database
        const [rows] = await Pool.query(
            "CALL uspInsertarEstudioBiopsia(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
            [
                nombreEstudio, 
                descripcion, 
                resultado, 
                idHistoria,
                radiusMean,
                textureMean,
                smoothnessMean,
                compactnessMean,
                symmetryMean,
                fractalDimensionMean,
                radiusSE,
                textureSE,
                smoothnessSE,
                concavePointsSE,
                symmetrySE,
                symmetryWorst,
                fractalDimensionWorst
            ]
        );

        console.log({ rows });
        return { biopsia: { 
            nombreEstudio, 
            descripcion, 
            resultado, 
            idHistoria,
            radiusMean,
            textureMean,
            smoothnessMean,
            compactnessMean,
            symmetryMean,
            fractalDimensionMean,
            radiusSE,
            textureSE,
            smoothnessSE,
            concavePointsSE,
            symmetrySE,
            symmetryWorst,
            fractalDimensionWorst }}
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
    radiusMean,
    textureMean,
    smoothnessMean,
    compactnessMean,
    symmetryMean,
    fractalDimensionMean,
    radiusSE,
    textureSE,
    smoothnessSE,
    concavePointsSE,
    symmetrySE,
    symmetryWorst,
    fractalDimensionWorst
    ) {
    try {
        //Update biopsy to database
        const [rows] = await Pool.query(
            "CALL uspModificarEstudioBiopsia(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
            [
                idEstudio,
                nombreEstudio, 
                descripcion, 
                resultado, 
                idHistoria,
                radiusMean,
                textureMean,
                smoothnessMean,
                compactnessMean,
                symmetryMean,
                fractalDimensionMean,
                radiusSE,
                textureSE,
                smoothnessSE,
                concavePointsSE,
                symmetrySE,
                symmetryWorst,
                fractalDimensionWorst
            ]
        );

        console.log({ rows });
        return { biopsia: { 
            idEstudio,
            radiusMean,
            textureMean,
            smoothnessMean,
            compactnessMean,
            symmetryMean,
            fractalDimensionMean,
            radiusSE,
            textureSE,
            smoothnessSE,
            concavePointsSE,
            symmetrySE,
            symmetryWorst,
            fractalDimensionWorst }}
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
            "CALL uspMostrarEstudioBiopsiaActivos();"
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
            //"SELECT * FROM biopsia B JOIN estudio E ON E.idEstudio = B.idBiopsia WHERE B.idBiopsia = ? AND E.estado = 1",
            "CALL uspBuscarEstudioBiopsia(?);",
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
            "CALL uspEliminarEstudioBiopsia(?);",
            [idEstudio]
        );

        console.log({ rows });
        return { estudio: { idEstudio:  idEstudio }}
    } catch (error) {
        throw new Error(error);
    }
}