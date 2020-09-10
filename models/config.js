'use strict';
const path = require('path');
let config = {
  port: 3000,
  log: {
    logName: 'node_template',
    logPath: path.resolve(__dirname, '../logs/log.log')
  },
}
module.exports = config;