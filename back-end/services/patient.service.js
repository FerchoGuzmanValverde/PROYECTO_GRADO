//Imports
import { Pool } from "../database/db.config.js";

/**
 * CREATE Service
 */
export async function create(nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, codigoPaciente, fechaNacimiento, descripcion) {
    try {

        //Create patient and save to database
        const [rows] = await Pool.query(
            "CALL uspInsertarPersonaPacienteH(?, ?, ?, ?, ?, ?, ?, ?, ?);",
            [nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, codigoPaciente, fechaNacimiento, descripcion]
        );

        console.log({ rows });
        return { message: "Paciente registrado con éxito." }
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
            "CALL uspMostrarPersonaPacienteActivos();"
        );
        return rows
    } catch (error) {
        return error
    }
}

/**
 * UPDATE Service
 */
export async function update(idPersona, nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, codigoPaciente, fechaNacimiento, descripcion) {
    try {
        //Update patient to database
        const [rows] = await Pool.query(
            "CALL uspModificarPersonaPacienteH(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
            [idPersona, nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, codigoPaciente, fechaNacimiento, descripcion]
        );

        console.log({ rows });
        return { message: "Paciente actualizado con éxito."}
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * FIND BY ID Service
 */
export async function findById(id) {
    try {
        const [rows] = await Pool.query(
            "CALL uspBuscarPersonaPaciente(?);",
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
export async function logDelete(id) {
    try {
        //Logical delete person to database
        const [rows] = await Pool.query(
            "CALL uspEliminarPersonaPacienteH(?);", 
            [id]
        );
        return rows;
    } catch (error) {
        throw new Error(error);
    }
}