'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('orders', 'buyerId', {
      type: Sequelize.INTEGER,
      reference: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('orders', 'sellerId', {
      type: Sequelize.INTEGER,
      reference: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('orders', 'buyerId');
    await queryInterface.removeColumn('orders', 'sellerId');
  },
};
