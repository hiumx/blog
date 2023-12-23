
class NewsController {

    index(req, res) {
        res.render('news');
    }

    detail(req, res) {
        res.send('Show detail.');
    }


}

export default new NewsController;