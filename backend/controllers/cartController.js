const asyncHandler = require('express-async-handler')
const Cart = require('../models/cartModel');

// get All items from cart
const fetchAllItems = asyncHandler(async (req,res)=>{
    const allItems =await Cart.find({userId:req.user.id});
    res.json({items:allItems});
})

//add new item to the cart
const addItemToCart = asyncHandler(async (req,res)=>{
    

})

  
// increase the quantity of item
const increaseQuantity =asyncHandler(async (req,res)=>{
    
})

// decrease the quantity of item
const decreaseQuantity =asyncHandler(async (req,res)=>{
    
})


// delete item from cart
const deleteItemFromCart =asyncHandler(async (req, res)=>{
    
})

// delete all items from cart
const deleteItemsFromCart =asyncHandler(async (req, res)=>{
    
})

// calculate the total price for products in the cart 
//totalAmount = (product price * product quantity) + tax + shipping fee 
const calculateTotalAmount =asyncHandler(async (req, res)=>{
    
})

module.exports = {
    fetchAllItems,
    addItemToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteItemFromCart,
    deleteItemsFromCart,
    calculateTotalAmount
}