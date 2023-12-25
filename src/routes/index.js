import newRouter from './news.js';
import siteRouter from './site.js';
import courseRouter from './course.js';


function route(app) {

    app.use('/news', newRouter);
    app.use('/courses', courseRouter);

    app.use('/', siteRouter);

}

export default route;