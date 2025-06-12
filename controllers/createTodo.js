const Todo = require('../models/todo');

const createTodo = async(req,res) => {
    try 
    {
        const {title,discription} = req.body;
        const response = await Todo.create({title,discription});

        res.status(200).json({
            sucess:true,
            data:response,
            message:"Entry created Succesfully"
        })

    } catch (error) {
        console.log("The error is in CreateController",error.message);
    }
}

module.exports = {createTodo};