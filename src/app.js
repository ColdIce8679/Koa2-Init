import Koa from 'koa';
import views from 'koa-views';
import mount from 'koa-mount';
import serve from 'koa-static';
import logger from 'koa-logger';
import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import koabody from 'koa-body';

import helmet from 'koa-helmet';
import jwt from 'koa-jwt';
import cors from 'kcors';

import open from 'open';
import middleware from './middleware';
import routes from './routes';
import env from './config/env';
import path from 'path';

const secret = require('./config/secret.json');

const app = new Koa();

app
    .use(logger())
    // .use(bodyParser())
    .use(koabody({ multipart: true }))
    .use(middleware())
    .use(helmet())
    .use(cors())
    .use(mount('/', convert(serve(path.join(__dirname, '/public')))))
    .use(views(path.join(__dirname, '/view/'), {
        extension: 'html'
    }))
    .use(jwt({
        secret: '',
        // passthrough: true
    }).unless({
        path: ['/']
    }))
    .use(routes())

app.listen(
    env.ip,
    () => {
        console.log(`✅  The server is running at http://localhost:${env.ip}/`);
        // open(`http://localhost:${env.ip}/`);
    }
)

export default app;