// import all models here
const User = require("./User");
const FinanceData = require("./FinanceData");

// Reminder- create any additional associations here
FinanceData.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.hasMany(FinanceData, {
  foreignKey: "userId",
});

// export all models here
module.exports = { User, FinanceData };
