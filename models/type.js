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
    
    expenseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    
      
  
  },

  

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "type",
  }
);

module.exports = type;
