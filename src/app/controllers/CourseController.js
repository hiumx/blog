import CourseModel from '../models/Course.js';
import { mongooseToObject, multipleMongooseToObject } from '../../util/mongoose.js'

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

    async management(req, res) {
        const courses = await CourseModel.find({});
        res.render('courses/management', {
            courses: multipleMongooseToObject(courses)
        });
    }

    async edit(req, res) {
        const course = await CourseModel.findOne({_id: req.params.id})
        res.render('courses/edit', {
            course: mongooseToObject(course)
        })
    }

    async update(req, res) {
        await CourseModel.updateOne({_id: req.params.id}, req.body);
        res.redirect('/courses/management');
    }

    async show(req, res, next) {
        try {
            const course = await CourseModel.findOne({ slug: req.params.slug });
            res.render('courses/show', { course: mongooseToObject(course) });
        } catch (error) {
        }
    }
}

export default new CourseController;