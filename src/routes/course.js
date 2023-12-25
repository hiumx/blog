import express from 'express';
import courseController from '../app/controllers/CourseController.js';

const route = express.Router();

route.get('/create', courseController.create);
route.post('/store', courseController.store);

// route.get('/update', courseController.update);
route.get('/:slug', courseController.show);

export default route;