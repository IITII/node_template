'use strict';
const path = require('path');
let config = {
  port: 3000,
  log: {
    logName: 'node_template',
    logPath: path.resolve(__dirname, '../logs/log.log')
  },
  db: {
    // See: https://sequelize.org/master/manual/model-basics.html#model-synchronization
    sync: {
      force: process.env.DB_FORCE_SYNC || false,
      alter: process.env.DB_ALTER_SYNC || true,
    },
    connection: {
      "database": process.env.DB_CONN_DATABASENAME || "node",
      "username": process.env.DB_CONN_USERNAME || "root",
      "password": process.env.DB_CONN_PASSWORD || "node",
      "host": process.env.DB_CONN_HOST || "localhost",
      "dialect": "mysql",
      // See: https://sequelize.org/master/manual/getting-started.html#logging
      "logging": console.log,
      "define": {
        // "schema": "dbo",
        "timestamps": false,
        "freezeTableName": true,
        "tableName": "node_template"
      },
      //See: https://sequelize.org/master/manual/connection-pool.html
      "pool": {
        "max": 30,
        "min": 0,
        "acquire": 30000,
        "idle": 10000,
      }
    }
  }
}
module.exports = config;