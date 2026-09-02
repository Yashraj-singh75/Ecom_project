const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();  

const apiResponse = require("./utils/apiResponse");
const authRouter = require("./modules/auth/authRoute");
const userRoute = require("./modules/user/userRoute");
const notFound = require("./middlewares/notfound.middleware");
const errorHandler = require("./middlewares/errorHandler.middleware");
const categoryRouter = require("./modules/category/categoryRoute");
const BrandRouter = require("./modules/brand/brandRoute");

app.use(express.json());
app.use(helmet());

app.use(cookieParser());

app.use(
    cors
    (
        {
        origin: process.env.CORS_ORIGIN,
        credentials: true,
        }
    )
);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/brand",BrandRouter);
app.use("/api/v1/category",categoryRouter);


app.get("/api/v1/health", (req, res) => 
    {
    res.status(200).json
    (
        apiResponse(
            200,
            {
                service: "ecom-backend",
                env: process.env.NODE_ENV,
                uptimeSeconds: Math.round(process.uptime()),
                timestamp: new Date().toISOString(),
            },
            "API is running"
        )
    );
});
 
app.use(notFound); 

app.use(errorHandler); 

module.exports = app;