'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Messages.associate = function (models) {
        Messages.belongsTo(models.User, {
          foreignKey: {
            field: 'userId',
          },
          as: 'owner',
        });
      };
    }
  }
  Messages.init({
    userId: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};