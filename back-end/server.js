/**
 * Importing section
 */
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import UserRoutes from './routes/user.routes.js';
import PatientRoutes from './routes/patient.routes.js';
import HistoryRoutes from './routes/history.routes.js';
import BiopsyRoutes from './routes/biopsy.routes.js';
import NucleiCellsRoutes from './routes/nucleicells.routes.js';
import MiraiRoutes from './routes/mirai.routes.js';
import UltrasoundRoutes from './routes/ultrasound.routes.js';

//Instantiate an express server
const server = express();

/**
 * Subs requirements for server
 */

//Parse requests of content-type - application/json
server.use(express.json());

//Subs bodyparser to handle JSON files
server.use(bodyParser.json());

//Parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

//Enable hidden configuration data
dotenv.config();

//Set cors options for allowed fronts to make requests
var corsOptions = {
    origin: "http://localhost:3000"
};

//Subs cors to handle communication configuration
server.use(cors(corsOptions));

//Subs USER routes API's
server.use('/api', UserRoutes);
//Subs PATIENT routes API's
server.use('/api', PatientRoutes);
//Subs HISTORY routes API's
server.use('/api', HistoryRoutes);
//Subs Biopsy routes API's
server.use('/api', BiopsyRoutes);
//Subs Nuclei Cells routes API's
server.use('/api', NucleiCellsRoutes);
//Subs Mirai routes API's
server.use('/api', MiraiRoutes);
//Subs Ultrasound routes API's
server.use('/api', UltrasoundRoutes);

/**
 * Set port and listener
 */
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});