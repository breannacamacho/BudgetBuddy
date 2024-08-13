const router = require("express").Router();
const {withGuard} = require("../utils/authGuard")
// Import any models you plan to use for data's routes here
const { expenses, income, User } = require("../models/");

// If you would like to use an authGuard middleware, import it here
// localhost:3001/
// add a get / (landing page) route here
router.get("/", async (req, res) => {
  try {
    const expensesData = await expenses.findAll({
      include: [User],
    });

    const expensesArray = expensesData.map((expense) => expense.get({ plain: true }));

    const incomeData = await income.findAll({
      include: [User],
    });

    const incomes = incomeData.map((income) => income.get({ plain: true }));

    // Reminder- We're passing the examples data to the home handlebars template here!
    // Reminder- We're also passing the loggedIn status to the home template here so that we can conditionally render items if the user is logged in or not (like we do with the navbar using `{{if loggedIn}}`).
    res.render("home", {
      expensesArray,
      incomes,
      loggedIn: req.session.logged_in,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// add a get /login route here
router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

// add a get /signup route here
router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

// localhost:3001/page-one
router.get("/page-one", withGuard, async (req, res) => {
  
  // Reminder- We're also passing the loggedIn status to the page-one handlebars template here so that we can conditionally render items if the user is logged in or not.
  res.render("page-one" );

  //res.status(500).json(err);

});


module.exports = router;
