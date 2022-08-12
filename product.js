const mongoose = require('mongoose');
const productSchema= new mongoose.Schema({
    name:String,
    img:String,
    summary:String   
});

module.exports= mongoose.model("data",productSchema);