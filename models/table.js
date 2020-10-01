/**
 * @author IITII
 * @date 2020/9/30 23:19
 */
'use strict';
const {Sequelize} = require('sequelize');

const table = [
  {
    table_name: 'node_template',
    clos: {
      id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      name: {type: Sequelize.STRING, allowNull: false},
      description: {type: Sequelize.STRING}
    }
  },
];

module.exports = table;