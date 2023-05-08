//Import Dependencies
import * as userService from "../services/user.service.js";
import * as userValidator from "../validator/validators.js";
import * as jwtService from "../services/jwt.service.js";

/**
 * CREATE
 * @param { User } req
 * @param { response } res
 */
export const Create = async (req, res) => {
    const { nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, usuario, contrasenia, rol, correo } = req.body;
    const { errors, isValid } = userValidator.userValidator(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {
        //Create user in the database
        const { user } = await userService.create(nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, usuario, contrasenia, rol, correo);

        //Generate authentication token
        //const token = jwtService.encodeToken({ id: user.idUsuario, email: user.email });

        //Return the authentication token
        //res.json({ /*token */ message: "Usuario registrado"});
        res.json({ user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * READ ALL
 * @param { } req
 * @param { response } res
 */
export const ReadAll = async (req, res) => {
    try {
        //Read users from database
        const rows = await userService.readAll();
        return res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * UPDATE
 * @param { User } req
 * @param { response } res
 */
export const Update = async (req, res) => {
    const { idPersona, nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, usuario, contrasenia, rol, correo } = req.body;
    const { errors, isValid } = userValidator.userValidator(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {
        //Update user in the database
        const { user } = await userService.update(idPersona, nombres, primerApellido, segundoApellido, numeroCi, extensionCi, direccion, usuario, contrasenia, rol, correo);
        //Return the updated user
        res.json({ user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * LOGICAL DELETE
 * @param { User } req
 * @param { response } res
 */
export const LogDelete = async (req, res) => {
    const { id } = req.body;

    try {
        //Delete user in the database
        const { user } = await userService.logDelete(id);
        //Return the deleted user
        res.json({ user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * AuthUser
 * @param { User } req
 * @param { response } res
 */
export const AuthUser = async (req, res) => {
    const { correo, contrasenia } = req.body;

    try {
        const user = await userService.login(correo, contrasenia);
        console.log("USUARIO EN CONTROLADOR:", user);
        const token = jwtService.encodeToken({ id: user.idUsuario, correo: user.correo });

        res.send({ token });
    } catch (error) {
        console.log({ error: error.message });
        return res.status(400).json({ message: error.message });
    }
};

/**
 * Identify Me
 * @param { id } req
 */
export const Me = async (req, res) => {
    const { id } = req.params;
    try {
        //Verify the user exists
        const rows = await userService.findById(id);

        if (rows.length === 0) {
            return res.status(401).send("Usuario o contraseña incorrecto!!");
        }

        const {password, ...user} = rows[0];
        res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Some error occurred while authenticating the user." || error });
    }
}

/**
 * Log out
 * @param { User } req
 * @param { response } res
 */
export const Logout = async (req, res) => {
    try {
        req.session.token = null;
        res.send({ message: "Cerró sesion exitosamente!!"});
    } catch (error) {
        console.log({ error: error.message });
        return res.status(400).json({ message: error.message });
    }
};

/**
 * Find by ID
 * @param { User } req
 * @param { response } res
 */
export const FindById = async (req, res) => {
    const { id } = req.body;

    try {
        //Read user by id from database
        const rows = await userService.findById(id);
        return res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};