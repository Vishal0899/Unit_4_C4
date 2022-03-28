const mongoose = require("mongoose");

const connect = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/Unit-4-C4");
}


module.exports = connect;