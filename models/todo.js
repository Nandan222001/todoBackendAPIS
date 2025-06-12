const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true , 
            maxLength : 50,
        },
        discription : {
            type: String,
            required : true,
            maxLength : 50,
        },
        created_at : {
            type : Date, 
            required : true,
            default : Date.now(),
        },
        updated_at : {
            type : Date,
            required : true ,
            default : Date.now(),
        }
    }
)

module.exports = mongoose.model('todo',todoSchema);