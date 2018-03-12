import Router from 'koa-router';
import user from './api/user';
const router = new Router();

router.get('/', async(ctx, next) => {

    let cip = ctx.request.headers['x-forwarded-for'];

    if (cip === undefined) {
        cip = ctx.request.ip === '::1' ? '127.0.0.1' : ctx.request.ip;
    }
})

router.use('/user', user.routes(), user.allowedMethods());

export default router;