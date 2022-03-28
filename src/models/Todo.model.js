const mongoose = require("mongoose");

const todoschema = mongoose.Schema({
    userId : {type : mongoose.Schema.Types.ObjectId, ref : "user", required : true},
    title : {type : String, required : true},
},
{
    timestamps : true,
})

const Todo = mongoose.model("todo",todoschema);

module.exports = Todo; 