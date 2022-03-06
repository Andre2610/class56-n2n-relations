module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Matias",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andre",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karla",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sheyla",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dipali",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tejasri",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Urs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Johann",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eli",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alina",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rahila",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Francisco",
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
