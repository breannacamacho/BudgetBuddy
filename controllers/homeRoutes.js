const router = require("express").Router();
<<<<<<< HEAD
const { withGuard } = require("../utils/authGuard");
const { expenses, income, User } = require("../models/");
=======
const {withGuard} = require("../utils/authGuard")
// Import any models you plan to use for data's routes here
const { expenses, income, User, type } = require("../models/");
>>>>>>> c218e4fbe2fea94f81da5c718e539358b1b0777b

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

<<<<<<< HEAD
// Dashboard page route
router.get("/dashboard", withGuard, async (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
=======
// localhost:3001/page-one
router.get("/page-one", withGuard, async (req, res) => {
  //const user = await User.findByPk(req.session.user_id, {
   // attributes: {exclude: ['password']},
    //include: [{model: expenses, model: income}]
 // })


  //const userdata = user.get({plain: true})

  //console.log(userdata)


  res.render("page-one", {logged_in: true});

  // Reminder- We're also passing the loggedIn status to the page-one handlebars template here so that we can conditionally render items if the user is logged in or not.
  //res.render("page-one" );

  //res.status(500).json(err);

});

router.get("/api/userdata", withGuard, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: expenses }, { model: income }]
    });

    const userdata = user.get({ plain: true });
    console.log(userdata)
    res.json(userdata);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user data" });
  }
});

module.exports = router;
>>>>>>> c218e4fbe2fea94f81da5c718e539358b1b0777b
