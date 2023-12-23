import newRouter from './news.js';
import siteRouter from './site.js';

function route(app) {
    
    app.use('/news', newRouter);

    app.use('/', siteRouter);

}

export default route;