module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Foo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
