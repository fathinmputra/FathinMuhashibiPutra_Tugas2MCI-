'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('payments', [
      {
        'bank_name': "BNI",
        'account_name': "Fathin Muhashibi Putra",   
        'payment_proof' : "https://drive.google.com/file/d/1EyjHn_lBVh_jA9Zta7qm71jHlXQJzfhL/view?usp=sharing",
        'booking_id' : 2,
        'createdAt': new Date(),
        'updatedAt': new Date()
      }
    ], {});
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
