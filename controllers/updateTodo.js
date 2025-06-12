const Todo = require('../models/todo');

const updateTodo = async(req,res) => {
    try {
        const id = req.params.id;
        
        if(!id) {
            res.status(404).json({
                success : fail,
                message : "Id Not found in record",
            });
        }

        await Todo.findByIdAndUpdate({
            _id : id }, {
                title,description , updated_at : Date.now()
        },);

        res.status(200).json({
            seccess : true , 
            message : "Updated Succesfully"
        })
    } catch(error) {
        console.error("Error found at UpdateTodo Controler :- ", error.message);
        res.status(500).json({
            success : false , 
            message : "Internal Server error",
        });
    }
}

module.exports = {updateTodo};