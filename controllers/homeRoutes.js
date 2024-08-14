const router = require("express").Router();
const { withGuard } = require("../utils/authGuard");
const { expenses, income, User } = require("../models/");

// Landing page route
router.get("/", async (req, res) => {
  try {
    res.render("landing"); // Render the landing page view
  } catch (err) {
    res.status(500).json(err);
  }
});

// Overview page route
router.get("/overview", withGuard, async (req, res) => {
  try {
    const expensesData = await expenses.findAll({
      include: [User],
    });

    const expensesArray = expensesData.map((expense) => expense.get({ plain: true }));

    const incomeData = await income.findAll({
      include: [User],
    });

    const incomes = incomeData.map((income) => income.get({ plain: true }));

    res.render("overview", {
      expensesArray,
      incomes,
      loggedIn: req.session.logged_in,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login page route
router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Signup page route
router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Dashboard page route
router.get("/dashboard", withGuard, async (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;