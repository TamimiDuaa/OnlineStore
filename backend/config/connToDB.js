require("dotenv").config()

const mongoose = require('mongoose');

function connToDB(){
    try{
        mongoose.connect(process.env.ATLAS_URI);
        console.log("Connected to Database");
    }
    catch(e){
        console.log(e);
    }
}
module.exports =connToDB;