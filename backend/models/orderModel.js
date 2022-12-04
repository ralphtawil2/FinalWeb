const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
<<<<<<< HEAD
    address: {
      type: Object,
      equired: true,
    },
    status: {
      type: String,
      default: "pending",
    },
=======
>>>>>>> d7bad6e (Made minor changes.)
  },
  {
    timestamps: true,
  }
);

<<<<<<< HEAD
module.exports = mongoose.model("orders", OrderSchema);
=======
module.exports =mongoose.model("orders", OrderSchema)
>>>>>>> d7bad6e (Made minor changes.)
