//Import Dependencies
import * as patientService from "../services/patient.service.js";
import * as patientValidator from "../validator/validators.js"

/**
 * CREATE
 * @param { Patient } req
 * @param { response } res
 */
export const Create = async (req, res) => {
    const { nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, codigoPaciente, fechaNacimiento, descripcion } = req.body;
    const { errors, isValid } = patientValidator.patientValidator(req.body);

    if (!isValid) {
        console.log("Ocurrio un error al insertar el paciente.")
        return res.status(400).json(errors);
    }

    try {

        //Create patient in the database
        const { result } = await patientService.create(nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, codigoPaciente, fechaNacimiento, descripcion);

        //Return the created patient
        res.json({ result });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * READ ALL
 * @param { } req
 * @param { response } res
 */
export const ReadAll = async (req, res) => {
    try {
        //Read patients from database
        const rows = await patientService.readAll();
        return res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * UPDATE
 * @param { Patient } req
 * @param { response } res
 */
export const Update = async (req, res) => {
    const { idPersona, nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, codigoPaciente, fechaNacimiento, descripcion } = req.body;
    const { errors, isValid } = patientValidator.patientValidator(req.body);

    if (!isValid) {
        console.log("Ocurrio un error al actualizar el paciente.")
        return res.status(400).json(errors);
    }

    try {

        //Update patient in the database
        const { result } = await patientService.update(idPersona, nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, codigoPaciente, fechaNacimiento, descripcion);

        //Return the updated patient
        res.json({ result });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * LOGICAL DELETE
 * @param { Person } req
 * @param { response } res
 */
export const LogDelete = async (req, res) => {
    const { id } = req.body;

    try {
        //Delete patient in the database
        const { person } = await patientService.logDelete(id);
        //Return the deleted person
        res.json({ person });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * Find by ID
 * @param { Patient } req
 * @param { response } res
 */
export const FindById = async (req, res) => {
    const { id } = req.body;

    try {
        //Read patient by id from database
        const rows = await patientService.findById(id);
        return res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};