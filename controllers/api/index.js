const router = require("express").Router();

// Import all of the routes from /api/ here
const userRoutes = require("./userRoutes");
const FinanceDataRoutes = require("./FinanceDataRoutes");

// Connect the routes to the router here
router.use("/users", userRoutes);
router.use("/financeData", FinanceDataRoutes);

module.exports = router;
