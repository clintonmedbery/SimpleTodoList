const AuthenticationController = require('../controllers/authenticationController');

var router = require('express').Router();

function protected(req, res, next) {
    res.send("Here's the secret!");
}

router.route('/protected')
    .get(protected);

router.route('/signup').post(AuthenticationController.signup);

module.exports = router;