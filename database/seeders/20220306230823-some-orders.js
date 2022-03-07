module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'orders',
      [
        {
          total: 150,
          completed: true,
          buyerId: 1,
          sellerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          total: 550,
          completed: true,
          buyerId: 1,
          sellerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          total: 123,
          completed: false,
          buyerId: 2,
          sellerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  },
};
