const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String, 
        trim: true, // '   armaan    ' -> 'armaan'
    },      
    email: {
        required: true,
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                const re = /\S+@\S+\.\S+/;
                return value.match(re);
            },
            message: 'Please enter a valid email address',
        },
    },
    password: {
        required: true,
        type: String,
        validate: {
            validator: (value) => {
                
                return value.length>5;
            },
            message: 'Please enter a long password',
        },
    },
    address: {
        type: String, 
        default: '',
    },
    type: {
        type: String,
        default: 'user',
    },
    //property called cart

});

var User = mongoose.model('User', userSchema);

module.exports = User;