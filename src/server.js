const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app = require("./app");
require("dotenv").config();

const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const start = async () => 
{     
  try 
    {
        await connectDB();

        app.listen(PORT, () =>
            {
                console.log(`Server started on port ${PORT}`);
            }
        );
    } 
    catch (err) 
    {
        console.error(err.message);
    }
};

start();