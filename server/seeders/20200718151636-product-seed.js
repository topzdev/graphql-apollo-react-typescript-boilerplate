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

      await queryInterface.bulkInsert('user', [
        {
          id: "7566693e-a3f9-4994-bb59-2b0ca2e3efa3",
          username: "topzdev",
          password: "123456"
        },
        {
          id: "298a5f26-8798-4fd2-81da-cff492876ade",
          username: "Softdrinks",
          password: "123456"
        },
      ], {}),

      await queryInterface.bulkInsert('post', [
        {
          id: "0b8a6e17-96a8-4c26-9c20-a33da7080a06",
          title: "Bear Brand",
          content: "Gatas ng bayan",
          likes: 11,
          author: "7566693e-a3f9-4994-bb59-2b0ca2e3efa3",
          draft: false
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
