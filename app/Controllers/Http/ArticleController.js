'use strict'

const Article = use('App/Models/Article');
//const Auth = use('App/Models/Auth');
const User = use('App/Models/User');

class ArticleController {

    async index({ request, response }) {
        const data = await Article.all();
        response.status(200).send(data);
    }

    async store({ request, response, auth }) {
        const data = request.only(["title", "body", "id_category"]);

        data.id_users = auth.user.id;

        const post = await Article.create(data);
       // console.log(post);
        response.status(200).send(post);
    }
}

module.exports = ArticleController
