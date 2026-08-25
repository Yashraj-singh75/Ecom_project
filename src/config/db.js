const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log("Database Connection Established");
    } catch (err) {
        console.error("Database not connected:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;