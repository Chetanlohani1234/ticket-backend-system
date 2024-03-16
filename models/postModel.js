const mongoose = require('mongoose');

const ticketingSchema = mongoose.Schema({
    category:{
       type:String,
       required:true
    },
    heading:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    images:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("Post",ticketingSchema);