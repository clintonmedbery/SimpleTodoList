const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
    var timestamp = new Date().getTime();
    return jwt.encode({
        sub: user.id,
        iat: timestamp
    }, config.secret);
}

exports.signin = function(req, res, next) {
    var user = req.user;
    res.send({token: tokenForUser(user), user_id: user._id});

}

exports.signup = function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    if(!email || !password){
        return res.status(422).json({error: "You must provide an email and password"});
    }

    //Check to see if a user already exists
    User.findOne({email: email}, function(error, existingUser){
        if(error) {
            return next(error);
        }

        if(existingUser){
            return res.status(422).json({error: "Email is already signed up."});
        }

        var user = new User({
            email: email,
            password: password
        });
        user.save(function(error) {
            if(error) {
                return next(error);
            }
            res.json({user_id: user._id, token: tokenForUser(user)});
        });
    });
}


