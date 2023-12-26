import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';

function configTemplateEngine(app) {

    app.engine('hbs', engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b
        }
    }
    ));
    app.set('view engine', 'hbs');
    app.set('views', './src/resource/views');

}

export default configTemplateEngine;
