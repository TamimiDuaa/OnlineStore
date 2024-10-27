const mongoose = require('mongoose');

const favouriteModel = mongoose.Schema({
   
    productId:{
            type:mongoose.Types.ObjectId,
            ref:'Product',
            required:true,
            
    },
        
    userid:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true,
    },
    quantity:{
        type: Number,
        required:true,
        default: 1,

    },
   
},
{
    timestamps:true
});

const Favourite =mongoose.model('Favourite', favouriteModel);

module.exports = Favourite;