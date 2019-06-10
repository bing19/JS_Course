const express = require('express');
const { validateBody, schemas } = require('../healper/routerHealper');
const passport = require('passport');
const router = express.Router();
const mainController = require('../controllers/mainController');
const passportLogin = passport.authenticate('local', {session: false});

router.route('/login')
    .post(passportLogin, validateBody(schemas.userSignInSchema), mainController.login);

router.route('/token')
    .post(mainController.refresh);

router.route('/signup')
    .post(validateBody(schemas.userSignUpSchema), mainController.signUp);

router.route('/')
    .get(mainController.index);

module.exports = router;