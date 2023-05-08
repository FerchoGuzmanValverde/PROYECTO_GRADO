export const isAuthorize = (roles) => {
    return (req, res, next) => {
        //Obtain autheticated user if exist
        const usuario = req.usuario;

        //Verify if user has needed role
        if(roles === "guest" && usuario) {
            return res.status(401).json({ message: "No autorizado!!" });
        }

        if(roles === "user" && !usuario) {
            return res.status(401).json({ message: "No autorizado!!" });
        }

        if(roles === "admin" && (!usuario || usuario.rol !== "admin")) {
            return res.status(401).json({ message: "No autorizado!!" });
        }

        //If user has the needed rol, pass to next middleware
        next();
    }
}