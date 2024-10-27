require("dotenv").config();
const express = require('express');
const app = express();
const connToDB = require('./config/connToDB');
connToDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`your Server running on http://localhost:${PORT}`);
})