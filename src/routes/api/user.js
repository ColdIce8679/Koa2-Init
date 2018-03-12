import Router from 'koa-router';
import UserControllers from '../../controllers/user';

const router = new Router();

router.post('/login', UserControllers.login);

export default router;