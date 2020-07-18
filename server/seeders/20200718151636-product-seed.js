'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return Promise.all([

      await queryInterface.bulkInsert('Categories', [
        {
          id: "7566693e-a3f9-4994-bb59-2b0ca2e3efa3",
          title: "Shampoo",
          description: "Pang straight ng buhok"
        },
        {
          id: "298a5f26-8798-4fd2-81da-cff492876ade",
          title: "Softdrinks",
          description: "Pang tulak ng kinakain"
        },
      ], {}),

      await queryInterface.bulkInsert('Products', [
        {
          id: "0b8a6e17-96a8-4c26-9c20-a33da7080a06",
          title: "Bear Brand",
          description: "Gatas ng bayan",
          price: 11.50,
          category: "7566693e-a3f9-4994-bb59-2b0ca2e3efa3"
        },
        {
          id: "617833b1-3776-4af0-8811-90de48caf3f8",
          title: "Milo",
          description: "Chocolate ng bayan",
          price: 6.50,
          category: "7566693e-a3f9-4994-bb59-2b0ca2e3efa3"
        }
      ], {}),]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */

    return Promise.all([
      await queryInterface.bulkDelete('Categories', null, {}),
      await queryInterface.bulkDelete('Products', null, {}),
    ])
  }
};
