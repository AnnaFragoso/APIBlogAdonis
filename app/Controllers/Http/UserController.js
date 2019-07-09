'use strict'

const User = use('App/Models/User');

class UserController {

    async index({ response }) {
        const data = await User.all();
        response.status(200).send(data);
    }
}

module.exports = UserController
