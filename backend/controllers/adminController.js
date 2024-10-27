const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const adminModel = require('../models/adminModel');

const fetchAllAdmins = asyncHandler(async (req,res)=>{
    const allAdmins =await adminModel.find();
    res.json({admins:allAdmins});
})

const fetchAdminById = asyncHandler(async (req,res)=>{
    const id=req.params.id;

    const admin =await adminModel.findById(id);
    res.json({admin:admin});
})
//Login 
const Login = asyncHandler(async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const adminByEmail =await adminModel.findOne({email})

    const comparing =await bcrypt.compare(password, adminByEmail.password)

    if(adminByEmail && comparing){
        res.status(200).json({success:true, 
            _id:adminByEmail.id,
            name: adminByEmail.name,
            email: adminByEmail.email,
            token: generateToken(adminByEmail._id)})

    }
    else{
        res.status(400).json({success:false})
    }

})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET ,{
        expiresIn: '30d', // Token will expire in 30 days
      })
  }
  
//Register
const createNewAdmin =asyncHandler(async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    
    if(!name){
        res.status(400);
        throw new Error('Please Fill name field')
    }
    else if(!email){
        res.status(400);
        throw new Error('Please Fill email field')
    }
    else if(!password){
        res.status(400);
        throw new Error('Please Fill password field')
    }

    const isAdminExist =await adminModel.findOne({email})

    if(isAdminExist){
        res.status(400);
        throw new Error('Admin already Exits')
        
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const newAdmin = await adminModel.create({
        name:name,
        email:email,
        password:hashedPassword
    });
    if(newAdmin){
        res.status(201).json({success:true, 
            _id: newAdmin.id,
           name: newAdmin.name,
           email: newAdmin.email,
           token: generateToken(newAdmin._id)})
    }
    else{
        res.status(400)
        throw new Error('Invalid admin data')
    }

})

//update my profile
const updateAdmin =asyncHandler(async (req, res)=>{
    const adminId = req.params.id;
    const name = req.body.name;
    const email = req.body.email;

    if(!name){
        res.status(400);
        throw new Error('Please Fill name field')
    }
    else if(!email){
        res.status(400);
        throw new Error('Please Fill email field')
    }

    const updatedUser =await adminModel.findByIdAndUpdate(adminId,{
        name:name,
        email:email,
    })
    const result =await adminModel.findById(adminId);
    
    res.json({success: true, updateAdmin: result});
})

//delete account
const deleteAdmin =asyncHandler(async (req, res)=>{
    const adminId = req.params.id;
    try{
        console.log(adminId);
        await adminModel.findByIdAndDelete(adminId);
        res.json({success: true});
    }
    catch(e){
        res.json({success: false});

    }
})

module.exports = {
    Login,
    fetchAdminById,
    fetchAllAdmins,
    createNewAdmin,
    updateAdmin,
    deleteAdmin
}