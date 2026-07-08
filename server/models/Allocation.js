const mongoose = require("mongoose");

const allocationSchema = new mongoose.Schema(
{
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
        required:true
    },

    branch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Branch",
        required:true
    },

    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },

    quantityAssigned:{
        type:Number,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("Allocation",allocationSchema);