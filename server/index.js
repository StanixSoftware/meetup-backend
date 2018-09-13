import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`App listening on port: ${PORT}`);
    }
});