//Import dependencies
import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

//Create a conexion object
export const Pool = createPool({
    host: 'localhost',
    user: process.env.user,
    database: process.env.database,
    password: process.env.password
  });