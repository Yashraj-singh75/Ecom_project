const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const mongan = require("mongan");
const rateLimit = require("express-rate-limit"); 
const compression = require("compression");

const origin = 'http://localhost:3000';

const app = express();

app.use(cookieParser());
app.use(express.json());
require("dotenv").config;
app.use(cookieParser());
app.use(cors({ origin, crendentials: true }));
app.use(mongoSanitize());
app.use(compression());
app.use(morgan('dev'));  
app.use(helmet()); 

const limiter = rateLimit
({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many Requests from IP'
}) ;

app.use('/api', limiter); 

app.get("/app/v1/health", (req, res) =>
{
    console.log("get api");
})
 
module.exports = app;