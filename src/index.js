const express = require("express");
const mongoose = require("mongoose");
const connect = require("./configs/db");

const app = express();
app.use(express.json());

const usercontroller = require("./controllers/User.controller");
const todocontroller = require("./controllers/Todo.controller");


app.use("/register",usercontroller);
app.use("/todos",todocontroller);

app.listen(4000,async () =>{
    try{
        await connect();
        console.log("Listening on port 4000");
    }catch(err){
        console.error(err);
    }
})