module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "classes",
      [
        {
          name:"Code 55",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"Code 56",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"Code 57",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("classes", null, {});
  },
};