const sequelize = require("../config/connection");

// Reminder- import any models you want to seed here
const { User, expenses, income, type } = require("../models");

// Reminder- import any data you want to seed here
const expenseData = require("./expenseData.json");
const userData = require("./userData.json");
const incomeData = require("./incomeData.json")
const typeData = require("./typeData.json")

const seedDatabase = async () => {
  // sync all models
  await sequelize.sync({ force: true });
  console.log("Sequelize synced");

  // bulkCreate example users
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log("Users created");

  // bulkCreate example data
  await expenses.bulkCreate(expenseData, {
    individualHooks: true,
    returning: true,
  });
  console.log("Expenses data created");

  await income.bulkCreate(incomeData, {
    individualHooks: true,
    returning: true,
  });
  console.log("income data created");

  await type.bulkCreate(typeData, {
    individualHooks: true,
    returning: true,
  });
  console.log("income data created");

  // Reminder- add any other models you want to seed here


  process.exit(0);
};

seedDatabase();
