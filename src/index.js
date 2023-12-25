import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import methodOverride from 'method-override';
import { fileURLToPath } from 'url';
import route from './routes/index.js';
import * as db from './config/db/index.js'

//Create instance app
const app = express();

const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect Database
db.connect();

//HTTP logger
app.use(morgan('combined'));

//Config static assets file
app.use(express.static(path.join(__dirname, 'public')));

//Middleware parse coming request with urlencoded 
app.use(express.urlencoded({
     extended: true
}))
//Middleware parse coming request with json 
app.use(express.json())

//method-override
app.use(methodOverride('_method'))

//Template engine
app.engine('hbs', engine({
     extname: '.hbs',
     helpers: {
               sum: (a, b) => a + b
          }
     }
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resource/views'));


route(app);


app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
});
