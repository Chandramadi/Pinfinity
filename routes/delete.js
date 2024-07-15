const mongoose = require("mongoose");

const deleteSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    posts:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Posts",
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

module.exports = mongoose.model("Delete",deleteSchema);