const mongoose = require("mongoose");
require("dotenv").config();
const connectdb=async()=>{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Connected");
};

console.log("finished");

module.exports=connectdb;