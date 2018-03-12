import User from '../models/user';

class UserControllers {

    async login(ctx) {
        ctx.body = await User.login(ctx);
    }

}

export default new UserControllers();