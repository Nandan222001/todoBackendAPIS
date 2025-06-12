const Todo = require('../models/todo');

const deleteTodo = async(req,res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.statue(204).json({
                status: "failed",
                message : "Id Not Found in record"
            })
        }

        await Todo.findByIdAndDelete({
            _id : id
        });

        res.status(200).json({
            status : success , 
            message : "Deleted Succesfully"
        });

    } catch (error) {
        console.log("Failed due to :- ",error.message);
        res.status(500).json({
            status:"fail",
            message:"Internal Server Error",
        });
    }
}

module.exports = {deleteTodo};