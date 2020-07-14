'use strict';
const Router = require('koa-router');
const router = Router();
const auth = require('../controllers/auth')

module.exports = router;

router.get('/', async (ctx, next) => {
  ctx.response.body = "Hello"
  next()
});

router.post('/', auth);