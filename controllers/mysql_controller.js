/**
 * @author IITII
 * @date 2020/10/1 21:17
 */
'use strict';
const mysql_api = require('../lib/mysql_api'),
  {logger} = require('../middlewares/logger.js');

// pre-init
(() => {
  mysql_api.authenticate()
    .catch(e => {
      logger.fatal(e);
      process.exit(1);
    })
})()

const create = async (ctx, next) => {
  await mysql_api.insert(ctx.request.body)
    .then(() => {
      ctx.response.status = 200;
      ctx.response.body = 'created';
    })
    .catch(e => {
      ctx.response.status = 503;
      ctx.response.body = e;
    })
    .finally(() => {
      return next();
    })
}

const findAll = async (ctx, next) => {
  await mysql_api.mysql_op.findAll()
    .then(res => {
      ctx.response.status = 200;
      ctx.response.body = JSON.stringify(res);
    })
    .catch(e => {
      ctx.response.status = 503;
      ctx.response.body = e.message;
    })
    .finally(() => {
      return next();
    })
}

const findByPk = async (ctx, next) => {
  await mysql_api.mysql_op.findByPk(ctx.request.body.id)
    .then(res => {
      ctx.response.status = 200;
      ctx.response.body = JSON.stringify(res);
    })
    .catch(e => {
      ctx.response.status = 503;
      ctx.response.body = e;
    })
    .finally(() => {
      return next();
    })
}

const update = async (ctx, next) => {
  await mysql_api.mysql_op.update(ctx.request.body)
    .then(res => {
      ctx.response.status = 200;
      ctx.response.body = JSON.stringify(res);
    })
    .catch(e => {
      ctx.response.status = 503;
      ctx.response.body = e;
    })
    .finally(() => {
      return next();
    })
}

module.exports = {
  create,
  findAll,
  findByPk,
  update,
}