const router = require('express').Router();
const apiRoutes = require('./api');

// Import all of the routes from controllers here
const homeRoutes = require('./homeRoutes'); 

// Connect the routes to the router here
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

