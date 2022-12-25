const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');
const user = require('../models/user');

router.get('/profile', usersController.profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);
router.post('/create', usersController.create);
router.post('/create-session', usersController.createSession);
router.get('/signOut', usersController.signOut);
module.exports = router;