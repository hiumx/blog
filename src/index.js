import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resource/views'));

app.get('/', (req, res) => {
     res.render('home');
})

app.get('/search', (req, res) => {
     console.log(req.query)
     res.render('search');
})

app.post('/search', (req, res) => {
     console.log(req.query);
     res.render('search')
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)});
