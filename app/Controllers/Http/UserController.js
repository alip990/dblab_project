'use strict'

const User = use('App/Models/User');

class UserController {
    async create({ request, response, auth,session}) {
        const user = await User.create(request.only(['name','email','password','Address','phone']));
        session.flash({ successMessage: 'You have signuped successfully!' })
        await auth.login(user);
       return response.redirect('/');
    }
    async login({ request, auth, response, session }) {
        const { email, password } = request.all();

        try {
            await auth.attempt(email, password);
            return response.redirect('/');
        } catch (error) {
            session.flash({loginError: 'These credentials do not work.'})
            return response.redirect('/login');
        }
    }
}

module.exports = UserController