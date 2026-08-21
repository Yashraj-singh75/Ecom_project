const mongoose = require('mongoose');
require("dotenv").config;  

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async (req, res) => 
{ 
    const connection = await mongoose.
    connect(process.env.MONGO_URL);

    console.log("Database Connection Established"); 
}


module.exports = connectDB();