// Table for user expnses, doesn't store value but stores type data
// Third-party Modules
const { Model, DataTypes } = require("sequelize");

// Local Modules
const sequelize = require("../config/connection");

class expenses extends Model { }

expenses.init(
  {
    type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'expenses',
        key: 'id'
      }
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }


  },



  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "data one",
  }
);

module.exports = expenses;
