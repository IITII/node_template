'use strict';
// koa 封装类
const Koa = require('koa'),
  BodyParser = require('koa-bodyparser'),
  convert = require('koa-convert'),
  app = new Koa(),
  config = require('./models/config'),
  {logger, loggerMiddleware} = require('./middlewares/logger'),
  commonRouter = require('./routes/common'),
  publicRouter = require('./routes/public'),
  privateRouter = require('./routes/private'),
  utilsMiddleware = require('./middlewares/utils');

// logger
app.use(loggerMiddleware);
app.use(convert(BodyParser({
  encode: 'utf-8',
  formLimit: '12mb',
  jsonLimit: "7mb",
  textLimit: "5mb",
  onerror: (err, ctx) => {
    ctx.response.status = 413;
    ctx.response.body = "Form 表单数据过大";
    logger.error(err);
  }
})))
// post logger
app.use(utilsMiddleware.postData)

// Router
app
  // common router
  .use(commonRouter.routes())
  .use(commonRouter.allowedMethods())
  // public router
  .use(publicRouter.routes())
  .use(publicRouter.allowedMethods())
  // private router
  .use(privateRouter.routes())
  .use(privateRouter.allowedMethods())

app.listen(config.port, () => {
  logger.info(`Service is listening on port: ${config.port || 3000}`)
})
