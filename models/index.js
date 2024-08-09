// import all models here
const User = require("./User");
const expenses = require("./expenses");
const income = require("./income");
const type = require("./type");

// Reminder- create any additional associations here
expenses.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(expenses, {
  foreignKey: "user_id",
});

User.hasMany(income, {
  foreignKey: "user_id"
});

income.belongsTo(User,{
  foreignKey: "user_id"
});

type.belongsTo(expenses, {
  foreignKey: "type_id",
});

expenses.hasMany(type, {
  foreignKey: "type_id",
});

// export all models here
module.exports = { User, expenses, income, type };
