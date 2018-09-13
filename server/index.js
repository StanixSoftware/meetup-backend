import express from 'express';
import dotenv from 'dotenv';

import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';

dotenv.config();

const app = express();

/*
*   Database
*/
dbConfig();

/*
*   Middlewares
*/
middlewaresConfig(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`App listening on port: ${PORT}`);
    }
});
