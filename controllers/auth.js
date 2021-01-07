'use strict';

function publicAuth(ctx, next) {
  ctx.response.body = "public auth"
  return next()
}

function privateAuth(ctx, next) {
  ctx.response.body = "private auth"
  return next()
}

module.exports = {
  publicAuth,
  privateAuth
}
