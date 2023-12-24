import CourseModel from '../models/Course.js';
import { multipleMongooseToObject } from '../../util/mongoose.js'

class SiteController {
    async home(req, res) {
        let courses = await CourseModel.find({});
        res.render('home', {
            courses : multipleMongooseToObject(courses)
        });
    }

    search(req, res) {
        res.render('search');
    }
}

export default new SiteController;