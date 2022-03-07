module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          total: 150,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          total: 550,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          total: 123,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
