/**
 * @author iitii
 * @date 2021/1/7 23:56
 */
'use strict';

const Router = require('koa-router'),
  router = new Router(),
  {helloWorld} = require('../controllers/hello_world')

router
  .get('/', helloWorld)

module.exports = router
