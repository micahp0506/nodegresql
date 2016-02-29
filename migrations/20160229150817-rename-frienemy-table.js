'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    //lowercase to uppercase
    return queryInterface.renameTable('frienemies', 'Frienemies');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameTable('Frienemies', 'frienemies');
  }
};
