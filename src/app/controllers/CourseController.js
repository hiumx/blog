import CourseModel from '../models/Course.js';
import { mongooseToObject, multipleMongooseToObject } from '../../util/mongoose.js'

class CourseController {

    create(req, res, next) {
        res.render('courses/create');
    }

    async store(req, res, next) {
        try {
            const course = new CourseModel(req.body);
            await course.save();
            res.redirect('/');
        } catch (error) {
        }
    }

    management(req, res, next) {
        Promise.all([CourseModel.find({}), CourseModel.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses, numberCourseDeleted]) =>
                res.render('courses/management', {
                    courses: multipleMongooseToObject(courses),
                    numberCourseDeleted
                }
                ))
            .catch(next);
    }

    async edit(req, res) {
        d
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
            await CourseModel.delete({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {

        }
    }

    async forceDelete(req, res) {
        try {
            await CourseModel.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {

        }
    }

    async showTrashCourse(req, res) {
        const courses = await CourseModel.findDeleted({});
        res.render('courses/trash-courses', {
            courses: multipleMongooseToObject(courses)
        });
    }

    async restore(req, res) {
        await CourseModel.restore({ _id: req.params.id });
        res.redirect('back');
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