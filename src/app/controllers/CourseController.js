import CourseModel from '../models/Course.js';
import { mongooseToObject } from '../../util/mongoose.js'

class CourseController {
    async show(req, res) {
        const course = await CourseModel.findOne({ slug : req.params.slug});
        res.render('courses/show', {course: mongooseToObject(course)});
    }
}

export default new CourseController;