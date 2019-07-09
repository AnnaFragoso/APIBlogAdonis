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

    async show({ params, response }){
        const data = await Category.findOrFail(params.id);
        response.status(200).send(data);
       // console.log(data);
    }

    async update({ request, response, params }) {
        const { id } = params;
        const data = request.all();
        const category = await Category.findBy('id', id);
        category.merge(data);
        await category.save();
        return response.send(category);
    }

    async destroy({ params, response }) {
        const data = await Category.findOrFail(params.id);
        await data.delete();
    }

}

module.exports = CategoryController
