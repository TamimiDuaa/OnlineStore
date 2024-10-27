const mongoose = require('mongoose');

const adminModel = mongoose.Schema({
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
    

},
{
    timestamps:true
});

const Admin =mongoose.model('Admin', adminModel);

module.exports = Admin;