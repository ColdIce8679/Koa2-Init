import jwt from 'jsonwebtoken'
import util from 'util';

const secret = require('../config/secret.json');

const verify = util.promisify(jwt.verify);

export default async function authorization(ctx, next) {

    const token = ctx.header.authorization;
    if (token) {

        try {
            const payload = await verify(token.split(' ')[1], secret.sign);
            return next();
        } catch (err) {
            const payload = await verify(token.split(' ')[1], secret.sign);
            ctx.body = {
                message: 'author - 驗證失敗',
                log: err
            }
            return ctx.throw(401, ctx.body);
        }

    } else {

        ctx.body = {
            message: 'author - 404',
            log: 'token error'
        }
        return ctx.throw(401, ctx.body);

    }
}