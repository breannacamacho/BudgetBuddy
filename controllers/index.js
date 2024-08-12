const router = require("express").Router();

// Import all of the routes from controllers here
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api/");
// localhost:3001/

// Connect the routes to the router here
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
