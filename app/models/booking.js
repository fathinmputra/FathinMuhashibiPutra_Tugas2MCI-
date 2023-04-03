'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    id_card: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    seat_number: DataTypes.STRING,
    activate_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};