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

      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    type: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
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
    modelName: "expenses",
  }
);

module.exports = expenses;
