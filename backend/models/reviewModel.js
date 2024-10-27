const mongoose = require('mongoose');

const reviewModel = mongoose.Schema({
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
    comments:{
        type: String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
   
    reviewDate:{
        type: Date,
        default: Date.now(),
    },
},
{
    timestamps:true
});

const Review =mongoose.model('Review', reviewModel);

module.exports = Review;