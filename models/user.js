const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

var validateEmail = (email) => {
    return (/\S+@\S+\.\S+/).test(email);
}

var userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please enter a valid email']
    },
    password: {
        type: String
    },
    todos: [
        {
            text: {type: String}
        }
    ]
})

userSchema.pre('save', function(next){
    var user = this;
    if(user.isNew || user.isModified('password')){
        bcrypt.genSalt(15, function(error, salt){
            if(error){
                return next(error);
            }
            bcrypt.hash(user.password, salt, null, function(error, hash){
                if(error){
                    return next(error);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
    

});

userSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(error, isMatch){
        if(error){ 
            return callback(error);
        }
        callback(null, isMatch);

    });
}

module.exports = mongoose.model('user', userSchema);