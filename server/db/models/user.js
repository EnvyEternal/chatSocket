'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.associate = function (models) {
        User.hasMany(models.Messages, {
          foreignKey: {
            field: 'userId',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
          },
          as: 'messages',
        });
      };
    }
  }
  User.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};