const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    deliveryDate: {
      type: Date,
      required: true,
    },

    deliveryAddress: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Allocated", "Completed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);