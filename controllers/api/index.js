const router = require('express').Router();

// Import API routes
const financeDataRoutes = require('./financedataroutes'); 
const userRoutes = require('./userroutes'); 

// Use API routes
router.use('/finance', financeDataRoutes);
router.use('/users', userRoutes);

module.exports = router;

