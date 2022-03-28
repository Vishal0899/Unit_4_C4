const express = require("express");
const Todo = require("../models/Todo.model");

const router = express.Router();

router.post("",async (req,res) =>{
    try{
        const todo = await Todo.create(req.body);
        return res.status(201).send(todo);
    }catch(err){
        return res.status(500).send(err);
    }
})


router.get("",async (req,res) =>{
    try{
        const todo = await Todo.find().lean().exec();
        return res.status(201).send(todo);
    }catch(err){
        return res.status(500).send(err);
    }
})


router.get("/:id",async (req,res) =>{
    try{
        const todo = await Todo.findById(req.params.id).lean().exec();
        return res.status(201).send(todo);
    }catch(err){
        return res.status(500).send(err);
    }
})


router.patch("/:id/update",async (req,res) =>{
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new : true}).lean().exec();
        return res.status(201).send(todo);
    }catch(err){
        return res.status(500).send(err);
    }
})



router.delete("/:id/delete",async (req,res) =>{
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id, req.body, {new : true}).lean().exec();
        return res.status(201).send(todo);
    }catch(err){
        return res.status(500).send(err);
    }
})


module.exports = router;