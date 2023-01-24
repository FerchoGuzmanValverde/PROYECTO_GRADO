/**
 * Get import requirements
 */
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import express from "express";
import cors from 'cors';

import UserRoutes from './routes/user.routes.js';
import PatientRoutes from './routes/patient.routes.js';
import HistoryRoutes from './routes/history.routes.js';
import BiopsyRoutes from './routes/biopsy.routes.js';
import NucleicellsRoutes from './routes/nucleicells.routes.js';
import ImageRoutes from './routes/image.routes.js';

//Instantiate a express server
const server = express();

/**
 * Subs requires to server
 */

// Parse requests of content-type - application/json
server.use(express.json());

//Subs bodyparser to handle JSON files
server.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

//Enable hidden configuration data
dotenv.config();
//Set cors options
var corsOptions = {
    origin: "http://localhost:8081"
  };

//Subs cors to handle communication configuration
server.use(cors(corsOptions));

//Subs all User routes as API's
server.use('/api', UserRoutes); 
//Subs all Patient routes as API's
server.use('/api', PatientRoutes);
//Subs all History routes as API's
server.use('/api', HistoryRoutes);
//Subs all Biopsy routes as API's
server.use('/api', BiopsyRoutes);
//Subs all NucleiCells routes as API's
server.use('/api',NucleicellsRoutes);
//Subs all Image routes as API's
server.use('/api', ImageRoutes);

/***
 * Set Port and Listener
 */
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});