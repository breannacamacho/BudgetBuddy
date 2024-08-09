// Table of the exact amount spent on which expense, references expenses
// Third-party Modules
const { Model, DataTypes } = require("sequelize");

// Local Modules
const sequelize = require("../config/connection");

class type extends Model {}

type.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    expense: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    value: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },

    type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'expenses',
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

module.exports = type;
