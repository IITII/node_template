'use strict';
const Router = require('koa-router');
const router = Router();
const auth = require('../controllers/auth')

module.exports = router;

router.get('/', async (ctx, next) => {
  ctx.response.status = 200;
  // 通过 mime 字符串或文件扩展名设置响应 Content-Type
  // See: https://github.com/koajs/koa/blob/eda27608f7d39ede86d7b402aae64b1867ce31c6/lib/request.js#L639
  ctx.response.type = 'text/plain; charset=utf-8';
  ctx.response.body = "Hello";
  return next()
});

router.post('/', auth);