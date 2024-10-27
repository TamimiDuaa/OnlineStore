const mongoose = require('mongoose');

const orderModel = mongoose.Schema({
    productId: {
        type:mongoose.Types.ObjectId,
        ref:"Product",
        required:true,
    },
    userid:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    },
    quantity:{
        type: Number,
        required:true,
        default: 1,

    },
    totalPrice:{
        type:Number,
        required:true,
    },
    status:{
        type:String,

    },
    orderDate:{
        type: Date,
        default: Date.now(),
    },
},
{
    timestamps:true
});

const Order =mongoose.model('Order', orderModel);

module.exports = Order;