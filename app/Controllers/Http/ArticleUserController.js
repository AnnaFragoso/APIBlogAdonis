'use strict'

const User = use('App/Models/User');
const Article = use('App/Models/Article');

class ArticleUserController {
    async index({ response, params }){
        const user = await User.findByOrFail('id', params.id);
        const articles = await user.articles().fetch();
        response.status(200).send(articles);
    }
}

module.exports = ArticleUserController
