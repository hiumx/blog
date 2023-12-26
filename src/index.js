import express from 'express';
import route from './routes/index.js';
import * as db from './config/db/index.js'
import configTemplateEngine from './config/templateEngine/index.js';
import middleWare from './app/middleware/index.js';

//Create instance app
const app = express();

const port = 3000;

// Connect Database
db.connect();

//middlewares
middleWare(app);

configTemplateEngine(app);

route(app);

app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
});
