'use strict'

const User = use('App/Models/User');
//const Token = use('App/Models/Token');

class AuthController {
    async register({ request, response }) {
        const data = request.only(["username", "email", "password"]);

        const user = await User.create(data);

        response.status(200).send(user);
    }

   async authenticate ({ request, response, auth }) {
        const { email, password } = request.all();

        const token = await auth.attempt(email, password);

        response.send(token);
    }
}

module.exports = AuthController
