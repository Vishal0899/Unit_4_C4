const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    firstName :{type : String, required : true},
    lastName : {type : String, required : false},
    email : {type : String, required : true},
    password : {type : String, required : true},
},
{
    timestamps : true,
})

const User = mongoose.model("user",userschema);

module.exports = User;