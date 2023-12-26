import express from 'express';
import courseController from '../app/controllers/CourseController.js';

const route = express.Router();


route.get('/create', courseController.create);
route.post('/store', courseController.store);

route.get('/management', courseController.management);

route.get('/edit/:id', courseController.edit);
route.put('/:id', courseController.update);

route.delete('/:id', courseController.delete);
route.delete('/:id/force', courseController.forceDelete);

route.patch('/:id/restore', courseController.restore);

route.get('/trash-courses', courseController.showTrashCourse);

route.get('/:slug', courseController.show);

export default route;