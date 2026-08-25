const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const authRouter = require("./modules/auth/auth.router");
//const mongoSanitization = require("express-mongo-sanitize");
const apiResponse = require("./utils/apiResponse");
const notFound = require("./middlewares/notfound.middleware");
const errorHandler = require("./middlewares/errorHandler.middleware");


const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({origin : process.env.CORS_ORIGIN , credentials : true}));
app.use(cookieParser());
//app.use(mongoSanitization());


app.use("/api/v1/auth", authRouter);
app.use(notFound);
app.use(errorHandler);
app.get('/api/v1/health',(req,res)=> 
    res.status(200).json(
        apiResponse
        (200,
        { service:	'ecom-backend',
            env:	process.env.NODE_ENV,
             uptimeSeconds:	Math.round(process.uptime()),
             timestamp:	new	Date().toISOString(), 
            },
            	'API is running'
            )));














module.exports = app;