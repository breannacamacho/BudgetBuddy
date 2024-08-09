// Third-party Modules
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

// Local Modules
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 30],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 128], // Minimum and maximum length
        isUppercase(value) {
          if (!/[A-Z]/.test(value)) {
            throw new Error('Password must contain at least one uppercase letter.');
          }
        },
        isLowercase(value) {
          if (!/[a-z]/.test(value)) {
            throw new Error('Password must contain at least one lowercase letter.');
          }
        },
        isNumber(value) {
          if (!/\d/.test(value)) {
            throw new Error('Password must contain at least one number.');
          }
        },
        isSpecialChar(value) {
          if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            throw new Error('Password must contain at least one special character.');
          }
        },
        notContainUsername(value) {
          if (value.includes(this.username)) {
            throw new Error('Password cannot contain username.');
          }
        },
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        try {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        } catch (error) {
          throw new Error('Error hashing password during user creation');
        }
      },
      beforeUpdate: async (updatedUserData) => {
        try {
          if (updatedUserData.password) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          }
          return updatedUserData;
        } catch (error) {
          throw new Error('Error hashing password during user update');
        }
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
