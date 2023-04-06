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
    await queryInterface.bulkInsert('bookings', [
      {
       'name': "Fathin Muhashibi Putra",
       'gender': "fathinmp",
       'email': "fathinmp11@gmail.com",
       'id_card' : "3204120204980001",
       'phone_number' : "081234567890",
       'seat_number' : "A1",
       'activate_status' : true,
       'user_id' : 13,
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
