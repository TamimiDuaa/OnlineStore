const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Please add a name']
    },
    email: {
        type:String,
        required:[true, 'Please add an email'],
        unique: true
    },
    password:{
        type: String,
        required:[true, 'Please add a password']

    },
    phone:{
        type:Number,
        required:[true, 'Please add your phone number'],
        min:10
    },
    address:{
        type:String,

    },
    dob:{
        type: Date,
    }


},
{
    timestamps:true
});

const User =mongoose.model('User', userModel);

module.exports = User;