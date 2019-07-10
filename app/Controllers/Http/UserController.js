'use strict'

const User = use('App/Models/User');

class UserController {

    async index({ response }) {
        const data = await User.all();
        response.status(200).send(data);
    }

    async update({ request, response, params }){
        const data = request.all();
        const { id } = params;
        const user = await User.findBy('id', id);
        user.merge(data);
        await user.save();
        return response.send(user);
    }

    async show({ params, response }) {
        const data = await User.findOrFail(params.id);
        response.send(data);
    }

    async destroy({ params, response }){
        const data = await User.findOrFail(params.id);
        await data.delete();
    }
}

module.exports = UserController
