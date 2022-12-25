const express = require('express');
const router = express.Router();

router.get('/', require('../controllers/home_controller'));
router.use('/users', require('./users'));
// router.use('/users', require('./sign_in'));
// router.use('/users', require('./sign_up'))



// router.get('/action', require('../controllers/home_controller'));
// router.get('/contact', require('../controllers/home_controller'))

module.exports = router;