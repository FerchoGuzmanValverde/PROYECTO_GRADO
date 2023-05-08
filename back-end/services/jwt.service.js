//Import JWT tokens library
import jwt from "jsonwebtoken";

/**
 * Encode token
 */
export function encodeToken(data) {
    const token = jwt.sign(data, process.env.JWT_SECRET || "aszsdloiassnajhs1212", {
        expiresIn: process.env.EXPIRATION || "1h",
        algorithm: "HS256",
    });
    return token;
}

/**
 * Decode token
 */
export function decodeToken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
}