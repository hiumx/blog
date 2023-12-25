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
        try {
            const courses = await CourseModel.find({});
            res.render('courses/management', {
                courses: multipleMongooseToObject(courses)
            });
        } catch (error) {
            
        }
    }

    async edit(req, res) {
        try {
            const course = await CourseModel.findOne({ _id: req.params.id })
            res.render('courses/edit', {
                course: mongooseToObject(course)
            })
        } catch (error) {

        }
    }

    async update(req, res) {
        try {
            await CourseModel.updateOne({ _id: req.params.id }, req.body);
            res.redirect('/courses/management');
        } catch (error) {

        }
    }

    async delete(req, res) {
        try {
            await CourseModel.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {

        }
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