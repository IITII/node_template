'use strict';
const path = require('path')
let config = {
  port: process.env.TMP_PORT || 3000,
  log: {
    logName: process.env.LOGGER_NAME || 'node_template',
    logPath: path.resolve(__dirname, process.env.LOGGER_PATH || '../logs/log.log'),
    logLevel: process.env.LOGGER_LEVEL || 'debug'
  },
}
module.exports = config;
