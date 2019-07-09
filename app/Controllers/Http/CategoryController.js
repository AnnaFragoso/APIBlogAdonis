'use strict'

const Category = use('App/Models/Category');

class CategoryController {

    async index({ response }) {
        const category = await Category.all();
        response.status(200).send(category);
    }

    async store({ request, response }) {
        const data = request.only("category_name");
        const categories = await Category.create(data);
        response.status(200).send(categories);
    }

    async update([ request, response, params ]) {

    }

    async destroy({ params, response}) {
        
    }

}

module.exports = CategoryController
