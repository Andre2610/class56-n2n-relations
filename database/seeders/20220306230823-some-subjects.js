module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "subjects",
      [
        {
          name: "Javascript",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "React",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Express",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Typescript",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "GraphQL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jest",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("subjects", null, {});
  },
};
