const mongoose = require('mongoose');
const app = require('./app');

require("dotenv").config;
const PORT = process.env.PORT; 

const connectDB = require("./config/db");
connectDB();

const start = async () => 
{    
    try {
        await connectDB();
    }
    catch (err) 
    {
        console.log("Database not connected", err.message);
    }
    const server = app.listen(PORT, () => {
        console.log(`Server starts on port ${PORT}`); 
    })
} 

start();