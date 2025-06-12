const Todo = require('../models/todo');

const getTodo = async(req,res) => {
    try {
        const todos = await Todo.find({});

        res.status(200).json({
            success: true,
            data : todos,
            message : "Fetched Succesfully"
        })
    } catch (error) {
        console.log(error.message);
        console.error(error.message);
        res.status(500).json({
            success : false,
            messages : 'Internal Server Error'
        })
    }
}

const getTodoByID = async(req,res) => {
    try {
        const id = req.params.id;
        if(!id) {
            res.status(404).json({
                success:false,
                message:'Id Not Found In Record'
            });
        }
        const response = await Todo.findById({
            _id : id
        });

        res.status(200).json({
            success : true,
            data : response,
            message : "Record Fetched Succesfully"
        });
        
    } catch(error) {
        console.error("Error at getTodo Controller",error.message);
        res.status(500).json({
            status : "fail",
            message : "Internal Server Error"
        });
    }
}

module.exports = {
    getTodo,
    getTodoByID
  };
  