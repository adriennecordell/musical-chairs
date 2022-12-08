const router = require('express').Router();
const path = require('path')



const apiRoutes = require('./api');
const viewRoutes = require('./viewRoutes');

router.use('/', viewRoutes);
router.use('/api', apiRoutes);

module.exports = router;
