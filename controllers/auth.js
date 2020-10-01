'use strict';
const config = require('../models/config');

module.exports = (ctx, next) => {
  let data = ctx.request.body;
  if (data.token === config.app.APP_VERIFICATION_TOKEN
    && data.type === 'url_verification')
    ctx.response.body = JSON.stringify({
      challenge: data.challenge
    });
  return next();
}

