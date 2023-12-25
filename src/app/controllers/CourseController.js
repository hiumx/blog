import CourseModel from '../models/Course.js';
import { mongooseToObject } from '../../util/mongoose.js'

class CourseController {

    create(req, res, next) {
        res.render('courses/create');
    }

    async store(req, res, next) {
        try {
            await CourseModel.create(req.body);
            res.redirect('/');
        } catch (error) {
        }
    }

    // update(req, res) {

    // }

    async show(req, res, next) {
        try {
            const course = await CourseModel.findOne({ slug: req.params.slug });
            res.render('courses/show', { course: mongooseToObject(course) });
        } catch (error) {
        }
    }
}

export default new CourseController;