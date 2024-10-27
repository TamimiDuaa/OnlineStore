const mongoose = require('mongoose');

const cartModel = mongoose.Schema({
    products:[{
        productId:{
            type:mongoose.Types.ObjectId,
            ref:'Product',
            required:true,
            
        },
        quantity:{
            type:Number,
            required:true,
            default: 1,
        }
    }],
    userid:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true,
    },
    totalAmount:{// tax + productPrice*quantity +delevery fee 
        type: Number,
        required:true,
        default: 1,

    },
   
},
{
    timestamps:true
});

const Cart =mongoose.model('Cart', cartModel);

module.exports = Cart;