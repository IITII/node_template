'use strict';
const Router = require('koa-router'),
  router = new Router(),
  publicRouter = new Router(),
  {publicAuth} = require('../controllers/auth')

router
  .post('/auth', publicAuth)

publicRouter
  .use('/public', router.routes(), router.allowedMethods())

module.exports = publicRouter
