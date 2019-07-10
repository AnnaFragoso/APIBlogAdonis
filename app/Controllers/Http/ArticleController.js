'use strict'

const Article = use('App/Models/Article');
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
       
        response.status(200).send(post);
    }

    async update({ request, response, params }) {
        const data = request.all();
        const { id } = params;
        const article = await Article.findBy('id', id);
        article.merge(data);
        await article.save();
        return response.send(article);
    }

    async destroy({ request, response, params }) {
        const data = await Article.findOrFail(params.id);
        await data.delete();
    }
}

module.exports = ArticleController
