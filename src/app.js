/*
 * @Description:app
 * @Author: xiaoer
 * @Date: 2020-11-11 16:15:00
 * @LastEditTime: 2020-11-17 16:56:30
 */
const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const koaStatic = require('koa-static');
const path = require('path');

const { isProd } = require('./util/env');
const { SESSION_SECRET_KEY } = require('./conf/secretKeys');
const { REDIS_CONF } = require('./conf/db');

// 路由引入
const userApiRouter = require('./routes/api/user');
const utilsApiRouter = require('./routes/api/utils');
const userViewRouter = require('./routes/views/user');
const errorViewRouter = require('./routes/views/error');

// error handler
let onerrorConf = {};
if(isProd) {
    onerrorConf = {
        redirect: '/error'
    };
}
onerror(app, onerrorConf);

// middlewares
app.use(bodyparser({
  	enableTypes:['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(koaStatic(__dirname + '/public'));
app.use(koaStatic(path.join(__dirname, '..', 'uploadFiles')));

app.use(views(__dirname + '/views', {
  	extension: 'ejs'
}));

// session
app.keys = [SESSION_SECRET_KEY];
app.use(session({
    key: 'weibo.sid',
    prefix: 'weibo.sess',
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    },
    store: redisStore({
        all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
    })
}));

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(userApiRouter.routes(), userApiRouter.allowedMethods());
app.use(utilsApiRouter.routes(), utilsApiRouter.allowedMethods());
app.use(userViewRouter.routes(), userViewRouter.allowedMethods());
app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});

module.exports = app ;
