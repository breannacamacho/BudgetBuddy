// Third-party Modules
const { Model, DataTypes } = require("sequelize");

// Local Modules
const sequelize = require("../config/connection");

class FinanceData extends Model {}

FinanceData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    // Reminder- Add any new columns to the ExampleData model here
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "data one",
  }
);

module.exports = ExampleData;
