'use strict'

const Article = use('App/Models/Article');
const Category = use('App/Models/Category');

class ArticleCategoryController {

    async index ({ response, params }) {
        const category = await Category.findByOrFail('id', params.id)
        const article = await category.articles().fetch();
        response.status(200).send(article);
    }
}

module.exports = ArticleCategoryController
