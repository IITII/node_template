/**
 * @author IITII
 * @date 2020/10/1 0:39
 */
'use strict';
const config = require('../models/config'),
  {Sequelize} = require('sequelize'),
  {logger} = require('../middlewares/logger'),
  tables = require('../models/table');

const sequelize = new Sequelize(config.db.connection),
  mysql_op = sequelize
    .define(tables[0].table_name, tables[0].clos);

async function authenticate() {
  return await new Promise((resolve, reject) => {
    sequelize.authenticate()
      .then(() => {
        logger.info('db connected!!!');
        mysql_op.sync({
          force: config.db.sync.force,
          alter: config.db.sync.alter,
        })
          .then(() => {
            logger.info('db models sync successful!!!');
            return resolve();
          })
          .catch(e => {
            logger.fatal(`db models sync failed...`);
            return reject(e);
          })
      })
      .catch(e => {
        logger.fatal(`db connection refused...`);
        return reject(e);
      })
  })
}

function close() {
  mysql_op.close().then(() => {
    logger.info('db disconnect...')
  })
    .catch(e => {
      logger.fatal(e);
      // process.exit(1);
    })
}

/**
 * 添加记录
 * @param data 欲添加的数据
 */
async function insert(data) {
  return await new Promise((resolve, reject) => {
    mysql_op.create({
      id: data.id,
      name: data.name,
      desc: data.desc
    })
      .then(() => {
        return resolve();
      })
      .catch(e => {
        return reject(e);
      })
  });
}

module.exports = {
  authenticate,
  close,
  insert,
  mysql_op
}

