const mongoose = require('mongoose');

const productModel = mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Please add a name']
    },
    images:[{
        type:String,
        required:[true, 'Please add image'],
    }],
    description:{
        type: String,
        required:[true, 'Please add description of items ']

    },
    category:{
        type:String,
        required:[true, 'Please add product category'],
        min:10
    },
    type:{
        type:String,

    },
    price:{
        type: Number,
    },
    stock:{
        type: Number,
    },
    colors:[{
        type:String,
    }],
    sizes:[{
        type:String,
        default:'one size'
    }]


},
{
    timestamps:true
});

const Product =mongoose.model('Product', productModel);

module.exports = Product;