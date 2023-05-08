//Import Dependencies
import * as jwtService from "../services/jwt.service.js";
import * as userService from "../services/user.service.js";

export async function isAuthenticated(req, res, next) {
    const {
        headers: { authorization },
    } = req;

    if(!authorization) {
        return res.status(401).send({ message: "No autorizado!!" });
    }

    const accessToken = authorization.split(" ")[1];

    if(!accessToken) {
        return res.status(401).send({ message: "No autorizado!!" });
    }

    try {
        const decoded = jwtService.decodeToken(accessToken);
        const idUsuario = decoded.id;
        const usuario = await userService.findById(idUsuario);

        console.log({ usuario });

        if(!usuario) {
            return res.status(401).json({ message: "No autorizado!!" });
        }

        req.usuario = {
            id: usuario.idUsuario,
            correo: usuario.correo,
            rol: usuario.rol
        };

        next();
    } catch (error) {
        res.status(401).send({ message: "No autorizado!!" });
    }
}