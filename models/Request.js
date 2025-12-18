const mongoose = require("mongoose");

const requestSchema=new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    name: String,
    phone: String,
    serviceType: String,
    description: String,
    location: String,
    status:{ type: String ,defualt:"new"}},
    {timestamps : true });

module.exports = mongoose.model("Request", requestSchema);

